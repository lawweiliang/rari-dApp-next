import { callRouterWithMultiCall, encodeRouterCall, sendRouterWithMultiCall } from "lib/turbo/utils/turboMulticall";
import { balanceOf, approve } from "utils/erc20Utils";
import { BigNumber, Signer } from "ethers";
import { TRIBE, TurboAddresses } from "lib/turbo/utils/constants";
import { ITurboRouter } from "lib/turbo/utils/turboContracts";

export const createSafeAndDeposit = async (signer: Signer, amount: BigNumber, chainID: number) => {
    const provider = signer.provider
    if (!provider) return

    const userAddress = await signer.getAddress();
  
    const pullTokensArgs = [TRIBE, amount, TurboAddresses[chainID].ROUTER];
  
    const createAndDepositArgs = [TRIBE, userAddress, amount, amount];
  
    const encodedCreateSafeAndDeposit = encodeRouterCall(
      ITurboRouter,
      "createSafeAndDeposit",
      createAndDepositArgs
    );
  
    const encodedPullTokens = encodeRouterCall(
      ITurboRouter,
      "pullToken",
      pullTokensArgs
    )
  
    const encodedCalls = [encodedPullTokens, encodedCreateSafeAndDeposit];

    await approve(
      TurboAddresses[chainID].ROUTER,
      TRIBE,
      //@ts-ignore
      signer
    )

    if (true) {
      const preBalanceRouter = await balanceOf(
        TurboAddresses[chainID].ROUTER,
        TRIBE,
        signer
      )

        try {
            
            const simulation = await callRouterWithMultiCall(
                //@ts-ignore
                provider,
                encodedCalls,
                chainID
            )

            const preBalanceUser = await balanceOf(userAddress, TRIBE, signer);
    
            const receipt = await sendRouterWithMultiCall(signer, encodedCalls, chainID);
        
            const postBalanceRouter = await balanceOf(
                TurboAddresses[chainID].ROUTER,
                TRIBE,
                signer
            );
        
            const postBalanceUser = await balanceOf(userAddress, TRIBE, signer);
        
            return receipt
        } catch (e) {
            console.log(e)
      }

      }
      
}