var QrManager = function(){
    //*********************************SINGLETON********************************
    if (QrManager.prototype._singletonInstance) {
        return QrManager.prototype._singletonInstance;
    }
    QrManager.prototype._singletonInstance = this;     
    
    QrManager.prototype.initQR = function(){
        window.plugins.JavascriptCallbackProcessor.execute("startQR",[],succesStartQR,failStartQR);
        function succesStartQR(){
            alert("success!");
        }
        function failStartQR(){
            alert("fallo!");
        }  
    }
//*******************************CONSTRUCTOR********************************
    
    
//*********************************FUNCIONES********************************
    
  
}


