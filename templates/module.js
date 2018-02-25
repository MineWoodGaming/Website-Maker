module.exports = {

    //--------------------------------------------------------------------//
   // Module Name                                                        //
  //                                                                    //
 // This is the name of the Module.                                    //
//--------------------------------------------------------------------//

name: "Template Module",

    //--------------------------------------------------------------------//
   // Module Section                                                     //
  //                                                                    //
 // This is where the module will go, select the correct section.      //
//--------------------------------------------------------------------//

section: "Templates",

    //--------------------------------------------------------------------//
   // Module Description                                                 //
  //                                                                    //
 // This is the description of the module.                             //
//--------------------------------------------------------------------//

description: "BETA - STILL TESTING",

    //--------------------------------------------------------------------//
   // Module Function                                                    //
  //                                                                    //
 // This is where you will but the module functions for the website    //
//--------------------------------------------------------------------//

module: function(variable) {
    const module = variable.module[variable.index];
    const p = variable.p;
    const paragraph = module.paragraph;
	if(Array.isArray(target)) {
        <p>this.evalMessage(module.paragraph, module);<p>
		this.callNextModule(variable);
	} else {
		this.callNextModule(variable);
	}
},
    
    
    
module: function(WEB) {
}

    //--------------------------------------------------------------------//
   // End of Module                                                      //
  //                                                                    //
 // This is the end of the module, you made it :o                      //
//--------------------------------------------------------------------//
    
};
