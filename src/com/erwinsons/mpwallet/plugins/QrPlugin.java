/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.erwinsons.mpwallet.plugins;

import android.app.Activity;

/**
 *
 * @author JULIO_2
 */
public class QrPlugin {
    public static QrPlugin qrPlugin = null;
    private Activity context = null;
    private String value=null;
    
    private QrPlugin(Activity context){
        this.context = context;        
    }
    
    public static void inicializar(Activity context){
        if(qrPlugin == null) {
            qrPlugin = new QrPlugin(context);
        }
    }
    
    public static QrPlugin getInstance(){        
        return qrPlugin;
    }
    
    public void startQR(){
        value = null;
        IntentIntegrator integrator = new IntentIntegrator(context);
        integrator.initiateScan();
    }
    
    public String getQRvalue(){
        return value;
    }
    
    public void setQRvalue(String value){
        this.value=value;
    }
}
