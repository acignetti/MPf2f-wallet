package com.erwinsons.mpwallet;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.KeyEvent;
import android.view.Window;
import android.view.WindowManager;
import android.widget.Toast;
import com.erwinsons.mpwallet.plugins.IntentIntegrator;
import com.erwinsons.mpwallet.plugins.IntentResult;
import com.erwinsons.mpwallet.plugins.QrPlugin;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.apache.cordova.DroidGap;

public class Optimus extends DroidGap {    

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.setIntegerProperty("splashscreen", R.drawable.splash);
        try {
            setFullscreen();
        } catch (Exception e) {
        }

        super.loadUrl("file:///android_asset/www/index.html", 6000);
        QrPlugin.inicializar(this);
    }

    public void setFullscreen() {
        getWindow().clearFlags(WindowManager.LayoutParams.FLAG_FORCE_NOT_FULLSCREEN); //Clean FLAG
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
    }

    public void initiateQR() {
        IntentIntegrator integrator = new IntentIntegrator(this);
        integrator.initiateScan();
    }

    public void onActivityResult(int requestCode, int resultCode, Intent intent) {
        IntentResult scanResult = IntentIntegrator.parseActivityResult(requestCode, resultCode, intent);
        if (scanResult != null) {
                Log.d("QR", scanResult.getContents());
            QrPlugin.getInstance().setQRvalue(scanResult.getContents());            
        }


    }
    
    
    
}