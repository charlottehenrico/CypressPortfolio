/// <reference types ="cypress" />


import BasePageLab from "../../pageObjects/basePageTheLab";
import ConcatStrings from "../../pageObjects/concatStrings";

const concatStrings = new ConcatStrings();
const basePageLab = new BasePageLab();


describe ('GottoConcatStrings',()=>{})
    beforeEach(()=>{
        basePageLab.navigateToLabUrlSelectMenu()
        concatStrings.navigateToConcatenateStringsLab()
})

it ('shouldGenerateStrings', ()=>{
    concatStrings.clickGenerateStringsButton()

}
)

