// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
//Deployed Address : 0x980839db690cbf1D8011f7B97DbebB391E452625
//DEX TOKEN :0xdE43a09e5110817844D259d3376D82e93d328c06
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
//import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract DexToken is ERC20, ERC20Burnable, ERC20Permit {
    constructor()
        ERC20("DX Token", "DX")
        ERC20Permit("DX Token")
    {
        _mint(msg.sender, 100000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public  {
        _mint(to, amount);
    }
}
