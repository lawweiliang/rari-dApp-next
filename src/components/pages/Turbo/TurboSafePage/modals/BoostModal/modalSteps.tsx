import { USDPricedStrategy, USDPricedTurboSafe } from "lib/turbo/fetchers/safes/getUSDPricedSafeInfo";
import {
  Heading,
  ModalProps,
  Text,
  TokenAmountInput,
} from "rari-components";
import { abbreviateAmount } from "utils/bigUtils";
import StatisticTable from "lib/components/StatisticsTable";
import { FEI } from "lib/turbo/utils/constants";
import { FuseERC4626Strategy } from "hooks/turbo/useStrategyInfo";
import { SafeInteractionMode } from "hooks/turbo/useUpdatedSafeInfo";
import { HStack, Image, VStack } from "@chakra-ui/react";
import { commify, formatEther, parseEther } from "ethers/lib/utils";
import { mode } from "mathjs";
import { AmountSelectMode } from "components/shared/AmountSelectNew/AmountSelectNew";
import { InfoIcon } from "@chakra-ui/icons";

type BoostModalCtx = {
  incrementStepIndex(): void;
  resetStepIndex(): void;
  safe?: USDPricedTurboSafe;
  updatedSafe?: USDPricedTurboSafe;
  amount: string;
  setAmount(newAmount: string): void;
  transacting: boolean;
  onClickBoost(): void;
  onClickLess(): void;
  onClose(): void;
  onClickMax(): void;
  maxBoostAmount: string;
  mode: SafeInteractionMode.BOOST | SafeInteractionMode.LESS;
  strategy: USDPricedStrategy | undefined,
  erc4626Strategy: FuseERC4626Strategy | undefined,
  inputError: string | undefined,
};

type ModalStep = Omit<
  ModalProps<BoostModalCtx>,
  "ctx" | "isOpen" | "onClose"
>;

const MODAL_STEP_1: ModalStep = {
  title: ({ mode }) => `${mode} strategy`,
  subtitle: ({ strategy, erc4626Strategy }) => `Strategy ${erc4626Strategy?.symbol}`,
  children: ({ onClickMax, setAmount, amount, safe, updatedSafe, mode, maxBoostAmount, strategy }) =>
    !!safe && (
      <>
        <VStack w="100%" mb={3} align="flex-end">
          <TokenAmountInput
            value={amount}
            onChange={(amount: string) => setAmount(amount ?? '0')}
            tokenAddress={FEI}
            onClickMax={onClickMax}
          />
          <Text variant="secondary" mt="4">
            {mode === SafeInteractionMode.BOOST
              ? `You can boost ${maxBoostAmount} FEI`
              : `You can less ${formatEther(strategy!.boostedAmount)} FEI`
            }
          </Text>
        </VStack>
        <StatisticTable
          mb={3}
          statistics={[
            {
              title: "Total Boost Balance",
              primaryValue: abbreviateAmount(safe?.boostedUSD),
              secondaryValue: abbreviateAmount(updatedSafe?.boostedUSD),
              titleTooltip: "The maximum amount you can boost.",
              primaryTooltip: ""
            },
            {
              title: "Safe Utilization",
              primaryValue: parseFloat(safe?.safeUtilization.toString() ?? "0").toFixed(2) + "%" ?? "?",
              secondaryValue: parseFloat(updatedSafe?.safeUtilization.toString() ?? "0").toFixed(2) + "%" ?? "?",
              titleTooltip: "The health of your safe. ",
              primaryTooltip: ""

            },
          ]}
          isLoading={!updatedSafe}
        />
        {
          strategy?.boostedAmount?.eq(parseEther(amount ? amount : '0')) && (
            <HStack px={3}>
              <Image
                src="/static/turbo/action-icons/claim-interest.png"
                height={4}
                mr={4}
              />
              <Text>Lessing the entire strategy will also accrue earned Fei to the Safe.</Text>
            </HStack>
          )
        }

      </>
    ),
  buttons: ({
    mode,
    amount,
    strategy,
    transacting,
    onClickBoost,
    onClickLess,
    incrementStepIndex,
    inputError
  }) => [
      {
        children:
          !!inputError
            ? inputError
            : mode === SafeInteractionMode.LESS
              // TODO(@nathanleung) - how can we avoid this ternary syntax and coerce empty string to '0'
              ? strategy?.boostedAmount?.eq(parseEther(amount ? amount : '0'))
                ? "Less and Accrue Rewards"
                : "Less"
              : mode,
        variant: "neutral",
        loading: transacting,
        disabled: !amount || !!inputError,
        async onClick() {
          try {
            mode === "Boost"
              ? await onClickBoost()
              : await onClickLess()
            incrementStepIndex()
          }
          catch (err) {
            throw err
          }
        }
      },
    ],
};


const MODAL_STEP_2: ModalStep = {
  children: ({ amount, mode }) =>
  (
    <>
      <VStack>
        <Heading>
          {commify(amount)} FEI
        </Heading>
        <Text>Succesfully {mode}ed</Text>
      </VStack>
    </>
  ),
  buttons: ({
    onClose,
    resetStepIndex
  }) => [
      {
        children: "Back to Safe",
        variant: "neutral",
        async onClick() {
          resetStepIndex()
          onClose()
        },
      },
    ],
};


const MODAL_STEPS: ModalStep[] = [MODAL_STEP_1, MODAL_STEP_2];

export { MODAL_STEPS };
export type { BoostModalCtx };