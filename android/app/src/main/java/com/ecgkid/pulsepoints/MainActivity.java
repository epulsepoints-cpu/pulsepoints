package com.ecgkid.pulsepoints;

import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Bridge;

public class MainActivity extends BridgeActivity {
    
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        // Enhanced WebView settings for better performance
        Bridge bridge = this.getBridge();
        if (bridge != null) {
            WebView webView = bridge.getWebView();
            if (webView != null) {
                WebSettings settings = webView.getSettings();
                
                // Enable JavaScript and DOM storage
                settings.setJavaScriptEnabled(true);
                settings.setDomStorageEnabled(true);
                settings.setDatabaseEnabled(true);
                
                // Enable caching for better performance
                // Note: setAppCacheEnabled is deprecated in API 33+
                settings.setCacheMode(WebSettings.LOAD_DEFAULT);
                
                // Enable modern web features
                settings.setAllowFileAccess(true);
                settings.setAllowContentAccess(true);
                settings.setAllowUniversalAccessFromFileURLs(true);
                settings.setAllowFileAccessFromFileURLs(true);
                
                // Enable hardware acceleration
                settings.setRenderPriority(WebSettings.RenderPriority.HIGH);
                
                // Enable smooth scrolling
                webView.setScrollBarStyle(WebView.SCROLLBARS_OUTSIDE_OVERLAY);
                webView.setScrollbarFadingEnabled(true);
                
                // Enable debugging for development (always enabled in Capacitor)
                WebView.setWebContentsDebuggingEnabled(true);
                
                System.out.println("✅ WebView settings optimized for E-Pulsepoints");
            }
        }
    }
    
    @Override
    public void onStart() {
        super.onStart();
        System.out.println("🚀 E-Pulsepoints MainActivity started");
    }
}
