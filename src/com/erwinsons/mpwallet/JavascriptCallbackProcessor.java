/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.erwinsons.mpwallet;

import android.util.Log;
import com.erwinsons.mpwallet.plugins.QrPlugin;
import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;
import org.json.JSONArray;

/**
 *
 * @author axel.coronel
 */
public class JavascriptCallbackProcessor extends Plugin {
 //------------------------------CONSTANTES----------------------------------
    //--------------------------------------------------------------------------
    //----------------------------------QR--------------------------------------
    public static final String QR_START_SCAN = "startQR";
    public static final String QR_GET_VALUE ="getQR";
    //----------------------------------NFC-------------------------------------
    public static final String NFC_GET_VALUE ="getNFC";
    public static final String NFC_START_SCAN ="startNFC";
    //-------------------------------------------------------------------------
    
    //--------------------------VARIABLES LOCALES-------------------------------
    
    //--------------------------------------------------------------------------    
    
    //--------------------------------------------------------------------------
    
    public PluginResult execute(String action, JSONArray args, String callbackId) {
        PluginResult result = new PluginResult(PluginResult.Status.INVALID_ACTION, "La operación realizada no existe: " + action);
               
    //-------------------------------ACCIONES QR--------------------------------        
        if(action.equals(QR_START_SCAN)){  
            QrPlugin.getInstance().startQR();
            result = new PluginResult(PluginResult.Status.OK, "OK");
            Log.d(QR_START_SCAN, "exito");
        }
        
        if(action.equals(QR_GET_VALUE)){ 
            result = new PluginResult(PluginResult.Status.OK, QrPlugin.getInstance().getQRvalue());
            Log.d(QR_GET_VALUE, "exito");
        }
    //--------------------------------------------------------------------------
        
    //-------------------------------ACCIONES NFC--------------------------------  
        return result;
    }
    
}