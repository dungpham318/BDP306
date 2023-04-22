const TestToken = artifacts.require("TestToken");
const Reserve = artifacts.require("Reserve");
const Exchange = artifacts.require("Exchange");


module.exports = async function (deployer, network, accounts) {
  // await deployer.deploy(TestToken, "TokenA", "TKA", 18);
  // const tokenA = await TestToken.deployed();
  // await deployer.deploy(Reserve, tokenA.address);
  // const reserveA = await Reserve.deployed();
  // await reserveA.setExchangeRates(100, 250);

  // await deployer.deploy(TestToken, "TokenB", "TKB", 18);
  // const tokenB = await TestToken.deployed();
  // await deployer.deploy(Reserve, tokenB.address);
  // const reserveB = await Reserve.deployed();
  // await reserveB.setExchangeRates(50, 100);

  // await deployer.deploy(Exchange);
  // const exchangeCtr = await Exchange.deployed();
  // await exchangeCtr.addReserve(reserveA.address, tokenA.address, true);
  // await exchangeCtr.addReserve(reserveB.address, tokenB.address, true);
  // let addResA = await tokenA.approve(reserveA.address, 100)
  // let addResB = await tokenA.approve(reserveA.address, 100)


  await deployer.deploy(Reserve, "TokenA", "TKA", 18);
  const reserveA = await Reserve.deployed();
  await reserveA.setExchangeRates(1, 2);
  const tokenA = await reserveA.getTokenAddress()
  console.log('TokenA:::: ', tokenA)

  await deployer.deploy(Reserve, "TokenB", "TKB", 18);
  const reserveB = await Reserve.deployed();
  await reserveB.setExchangeRates(2, 4);
  const tokenB = await reserveB.getTokenAddress()
  console.log('TokenB:::: ', tokenB)

  await deployer.deploy(Exchange);
  const exchangeCtr = await Exchange.deployed();
  await exchangeCtr.addReserve(reserveA.address, tokenA, true);
  await exchangeCtr.addReserve(reserveB.address, tokenB, true);


  // let tmp = await exchangeCtr.getExchangeRate(tokenA.address, tokenB.address, '100000000000000000000000000000000000000000000000000000000000000000000')
  // exchangeCtr.setValue('1000000000000000000')
  // let tmp = await exchangeCtr.exchangeToken(
  //   '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  //   tokenB.address,
  //   '100000000000000000000000000000000000000000000000000000000000000000000',
  //   {
  //     from: '0x49ea6a20C8fe6B849030E17Ca1065030DaA5cEeE',
  //     value: '100000000000000000000000000000000000000000000000000000000000000000000'
  //   });
  // console.log(tmp)
}
