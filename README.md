## OpenSea Sale Monitor Tool

### Install
```
npm i
```

### Config
Create a .env file with a valid Alchemy key. Private key is just a placeholder.


### Run
```
npx hardhat run ./scripts/monitor.js --network mainnet
````

### Sample output
```
{0x2e4b40e5be613e80d33252042b119458a443d3bcca59881fe7374afc34c21b7c} [0xAd433c7070847e2afdFb24311fd60eEAAe99BA0f] sold tokenID [6418] from ERC-721 collection [0x099689220846644F87D1137665CDED7BF3422747] to [0x04Ed5106fB980b17533376610222f651796939dd]
{0x6630af86617d395e62729fb03cbad6ef1240f588ec5ca838f2c3d3bb2a4cab5d} [0x177983B6B0f3aB74146F4De029b43c448a9f86AB] sold tokenID [77067905403977361] from ERC-721 collection [0x82C7a8f707110f5FBb16184A5933E9F78a34c6ab] to [0x1118675842630a06bb517C1C3CB93E682D31E4E7]
{0x5a61f15e5d3b241bd9e65e9d834f8c9dad4e947b6d5908a14517ad759a0e0b66} [0xc4f814D88bf9A816592DAD0A7F6F5AD28b39dfdE] sold tokenID [2000174] from ERC-721 collection [0xdFDE78d2baEc499fe18f2bE74B6c287eED9511d7] to [0x942B85b14417d8b98AF8A0852f23bb0922494c9d]
{0x2f55d38c909fb9489fa0e1a232d338fbdb177b8dd7472961efbad3acf241c866} [0x335CD0CEf34d553F8858f03F371bAc65783BDC42] sold tokenID [68031] from ERC-721 collection [0x50f5474724e0Ee42D9a4e711ccFB275809Fd6d4a] to [0xeE264a9BD70dec66811b9A7C80F46b4Fa6F29E4a]
{0xc1cc8462cf6b9df7c6b6ae4fb3130ff0605cbdc9207aa51b3183b4f9499e2cb0} [0xfA528fBAA85E8be1e72968aC283EAaaf5809C5a1] sold [1] of tokenID [47] from ERC-1155 collection [0x6faD73936527D2a82AEA5384D252462941B44042] to [0x208b82B04449Cd51803fAE4B1561450ba13d9510]
{0x297254ee2619e155337fa682301963d9241f0d2d3421248924a3a941f78163c3} [0x9A15235379CF1111EA102850d442b743BF586FC5] sold tokenID [6214] from ERC-721 collection [0x8584e7A1817C795f74Ce985a1d13b962758FE3CA] to [0x0708F0370742E7ca10670aA614838D4611a9b0a0]
{0x00f82c7a7ea5f38333e81541e92e717c590b100c0f2dc2256d89c882c62a32be} [0x6524A4de1C6fA52F68D9Be4445646fDe8FDeCe2C] sold tokenID [9112] from ERC-721 collection [0x21bf3Da0cF0F28da27169239102E26d3d46956e5] to [0x0d3204BEf84C6A65D2A88A274Dd787D3faD2cdF1]
```