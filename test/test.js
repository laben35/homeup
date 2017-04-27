

var homeup = require("./../index.js");
var mocha = require("mocha");
var chai = require("chai");


var document = require("jsdom").jsdom(
        "<!doctype html><html><head></head><body></body></html>");
var window =  document.defaultView;
window.document = document;


homeup.init(window);

//homeup.emergency("Helllooooo");
// vérifier que l'on peut injecter window
//homeup.init(true);

//console.log(window);

//var jsdom = require("jsdom");

// description du test suite (le sujet du test)
mocha.describe("Homeup", function() {
    
    mocha.it("homeup is a module", function () {
        chai.assert("object" === typeof homeup);
    });
 // description du test case (le cas du test) 


    mocha.describe("methods", function () {
        
        mocha.it("Emergency is a function", function () {
            chai.assert("function" === typeof homeup.emergency);
        }); 
        
        mocha.it("does emergency create homeup", function () {
            homeup.emergency("fooooooo");
            chai.assert(
                "object" === typeof window.document.body.lastChild
             && "homeup" === window.document.body.lastChild.getAttribute("id")
             && "DIV" === window.document.body.lastChild.tagName
            );            
            window.document.body.removeChild (
                window.document.body.lastChild
            );
        });
 
//        mocha.it("Does emergency create homeup", function () {
//        
// //Vérifie que le popup est crée : Indice, regarder le dernier enfant du body
// // regarder son id, regarder sa classe, etc...
//            chai.assert("function" === typeof homeup.warning);
//        }); 
        
        mocha.it("Alert is a function", function () {
            homeup.alert("hello");
            chai.assert(
                  "object" === typeof window.document.body.lastChild
             && "homeup" === window.document.body.lastChild.getAttribute("id")
             && "DIV" === window.document.body.lastChild.tagName
            );            
            window.document.body.removeChild (
                window.document.body.lastChild
            );    
                   
        }); 
        
        mocha.it("Error is a function", function () {
            homeup.error("hello");
            chai.assert(
                  "object" === typeof window.document.body.lastChild
             && "homeup" === window.document.body.lastChild.getAttribute("id")
             && "DIV" === window.document.body.lastChild.tagName
            );            
            window.document.body.removeChild (
                window.document.body.lastChild
            );    
            
        }); 
        
        mocha.it("Critical is a function", function () {
            homeup.critical("helloo");
            chai.assert(
                  "object" === typeof window.document.body.lastChild
             && "homeup" === window.document.body.lastChild.getAttribute("id")
             && "DIV" === window.document.body.lastChild.tagName
            );            
            window.document.body.removeChild (
                window.document.body.lastChild
            );    
       
        }); 
        
        mocha.it("Notice is a function", function () {
            homeup.notice("helloo");
            chai.assert(
                  "object" === typeof window.document.body.lastChild
             && "homeup" === window.document.body.lastChild.getAttribute("id")
             && "DIV" === window.document.body.lastChild.tagName
            );            
            window.document.body.removeChild (
                window.document.body.lastChild
            );    
       
        }); 
        
        mocha.it("Debug is a function", function () {
            homeup.debug("helloo");
            chai.assert(
                  "object" === typeof window.document.body.lastChild
             && "homeup" === window.document.body.lastChild.getAttribute("id")
             && "DIV" === window.document.body.lastChild.tagName
            );            
            window.document.body.removeChild (
                window.document.body.lastChild
            );    
       
        }); 
        
        mocha.it("Info is a function", function () {
            homeup.info("helloo");
            chai.assert(
                  "object" === typeof window.document.body.lastChild
             && "homeup" === window.document.body.lastChild.getAttribute("id")
             && "DIV" === window.document.body.lastChild.tagName
            );            
            window.document.body.removeChild (
                window.document.body.lastChild
            );    
       
        }); 
        
        
        
        
        
    });
});
//console.log(mocha.decribe);
//console.log(mocha.it);
//console.log(chai.assert);
//console.log(chai.expect);


