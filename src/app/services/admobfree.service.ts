import { Injectable } from "@angular/core";
import {
  AdMobFree,
  AdMobFreeBannerConfig,
  AdMobFreeInterstitialConfig,
  AdMobFreeRewardVideoConfig
} from '@ionic-native/admob-free/ngx';
import { Platform } from '@ionic/angular';
 
 
@Injectable()
export class AdmobFreeService {
 
  //Interstitial Ad's Configurations
  interstitialConfig: AdMobFreeInterstitialConfig = {
    autoShow: false,
    id: "ca-app-pub-5460630490406737/9274311488"
  };
 
 
  constructor(private admobFree: AdMobFree, public platform: Platform) {
    platform.ready().then(() => {
 
      // Load ad configuration
      this.admobFree.interstitial.config(this.interstitialConfig);
      //Prepare Ad to Show
      this.admobFree.interstitial.prepare()
        .then(() => {
          // alert(1);
        }).catch(e => alert(e));
    });
 
    //Handle interstitial's close event to Prepare Ad again
    this.admobFree.on('admob.interstitial.events.CLOSE').subscribe(() => {
      this.admobFree.interstitial.prepare()
        .then(() => {
        }).catch(e => alert(e));
    });
  }
 
  InterstitialAd() {
    //Check if Ad is loaded
    this.admobFree.interstitial.isReady().then(() => {
      //Will show prepared Ad
      this.admobFree.interstitial.show().then(() => {
      })
        
    });
      
  }
 
  BannerAd() {
    let bannerConfig: AdMobFreeBannerConfig = {
      autoShow: true,
      id: "ca-app-pub-5460630490406737/4451012606"
      
    };
    this.admobFree.banner.config(bannerConfig);
 
    this.admobFree.banner.prepare().then(() => {
      // success
    }).catch(e => alert(e));
  }
 
}