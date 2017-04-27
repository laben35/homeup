

(function (root, factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
//        Le nom de votre namespace
        root.homeup = factory(root);
  }
}(this, function (root) {
    
    console.log("hello");
    
    if (root) {
        var style = root.document.createElement("style");
    }

  /*
   * 
   * @throws {Error} si type du message n'est pas string 
   * @throws {Error} si le massage est vide
   * @throws {Error} si le message dépasse 50 caractères
   */ 
    var getHelper = function (message) {
      if (typeof message !== "string") {
          throw new Error("Message must be string");
      }
      
      var div = root.document.createElement("div");
      div.setAttribute("id", "homeup");
      var p = root.document.createElement("p");
      var close = root.document.createElement("a");
      close.onclick = function () {
       this.parentNode.parentNode.removeChild(this.parentNode) ;
       console.log("Hello");
      };
      var button = root.document.createElement("button");
      var button1 = root.document.createElement("button");
      var pText = root.document.createTextNode(" Une popup");
      close.innerHTML = "&#x274C;" ;
      var buttonText = root.document.createTextNode("OK");
      var buttonText1 = root.document.createTextNode("Cancel");
       p.appendChild(pText);
       button.appendChild(buttonText);
       button1.appendChild(buttonText1);
       div.appendChild(close);
       div.appendChild(p);
       div.appendChild(button1);
       div.appendChild(button);
        div.style.background = "##F7F7F0";
        div.style.border = "solid 1px black"; 
        div.style.width  = "15%";
        div.style.height = "20%";
        div.style.position = "fixed";
        div.style.right = "2em";
        div.style.bottom = "20%";
        div.style.boxShadow = "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)";
        div.style.textAlign = "center";
        div.style.background = "##F7F7F0";
        close.style.background = "#FFFAFA";
       return div;
    };

  /**
   * log l'élément HTML dans le body
   * 
   * @param {HTMLElement} helper element html
   * @returns {void} 
   * @throws {Error} si le helper n'est pas un élément html
   * @throws {Error} si le body n'existe pas
   */
  var log = function (helper) {
      if (!(helper instanceof root.HTMLElement)
          || !root.document.body) {
      throw new Error ("Require a valid element and a body");
      }
      
  // si helper n'est pas une instance de HTMLElement
  //levée d'erreur
  //si body n'est pas accessible
  //levée d'erreur
  

      root.document.body.appendChild(helper);
      
  };
  

    return (function () {
        var self = {};
                  
        self.init = function (window) {
            if (!window || !window.document) {
                throw new Error ("homeup requires a window with a document");    
            }
            root = window;
        };
        self.emergency =  function(message) { 
           var helper = getHelper(message);
           log(helper);      
        },
        
        self.alert = function(message) { 
           var helper = getHelper(message);
           log(helper);      
        },
         self.error = function(message) { 
           var helper = getHelper(message);
           log(helper);      
        },
        self.critical = function(message) { 
           var helper = getHelper(message);
           log(helper);      
        },
        self.warning = function(message) { 
           var helper = getHelper(message);
           log(helper);      
        },
        self.notice = function(message) { 
           var helper = getHelper(message);
           log(helper);      
        },
        self.info = function(message) { 
           var helper = getHelper(message);
           log(helper);      
        },
        self.debug = function(message) { 
           var helper = getHelper(message);
           log(helper);      
        };
    return self;    
    }());
         
}));
