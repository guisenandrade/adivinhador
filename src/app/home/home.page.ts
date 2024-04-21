import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public toastcontroller:ToastController) {}

  pergunta1 = ''
  pergunta2 = ''
  pergunta3 = ''
  pergunta4 = ''
  pergunta5 = ''
  pergunta6 = ''
  pergunta7 = ''
  pergunta8 = ''
  pergunta9 = ''
  pergunta10 =''

  res = ''


  Advinhar (){
  
    if(this.pergunta1 == "sim" && this.pergunta2 == 'nao' && this.pergunta3 == 'nao' && this.pergunta4 == 'sim' && this.pergunta5 == 'nao'&& this.pergunta6 == 'sim' 
    && this.pergunta7 == 'nao' && this.pergunta8 == 'nao' && this.pergunta9 == 'nao'&& this.pergunta10 == 'sim'){
      this.res = "foi Elefante"
    }

     else if(this.pergunta1 == "sim" && this.pergunta2 == 'nao' && this.pergunta3 == 'sim' && this.pergunta4 == 'nao' && this.pergunta5 == 'sim'&& this.pergunta6 == 'sim' 
    && this.pergunta7 == 'nao' && this.pergunta8 == 'nao' && this.pergunta9 == 'nao'&& this.pergunta10 == 'sim'){
      this.res = "foi Leão"
    }
    else if(this.pergunta1 == "sim" && this.pergunta2 == 'nao' && this.pergunta3 == 'sim' && this.pergunta4 == 'sim' && this.pergunta5 == 'sim'&& this.pergunta6 == 'sim' 
    && this.pergunta7 == 'nao' && this.pergunta8 == 'nao' && this.pergunta9 == 'nao'&& this.pergunta10 == 'sim'){
      this.res = "foi Macaco"
    }
    else if(this.pergunta1 == "sim" && this.pergunta2 == 'nao' && this.pergunta3 == 'sim' && this.pergunta4 == 'sim' && this.pergunta5 == 'nao'&& this.pergunta6 == 'sim' 
    && this.pergunta7 == 'nao' && this.pergunta8 == 'nao' && this.pergunta9 == 'nao'&& this.pergunta10 == 'sim'){
      this.res = "foi Girafa"
    } 
    else if(this.pergunta1 == "nao" && this.pergunta2 == 'sim' && this.pergunta3 == 'sim' && this.pergunta4 == 'nao' && this.pergunta5 == 'sim'&& this.pergunta6 == 'sim' 
    && this.pergunta7 == 'nao' && this.pergunta8 == 'sim' && this.pergunta9 == 'nao'&& this.pergunta10 == 'nao'){
      this.res = "Pinguim"
    } 
    else if(this.pergunta1 == "sim" && this.pergunta2 == 'nao' && this.pergunta3 == 'nao' && this.pergunta4 == 'nao' && this.pergunta5 == 'sim'&& this.pergunta6 == 'nao' 
    && this.pergunta7 == 'nao' && this.pergunta8 == 'sim' && this.pergunta9 == 'nao'&& this.pergunta10 == 'sim'){
      this.res = "foi Baleia"
    } 
    else if(this.pergunta1 == "nao" && this.pergunta2 == 'nao' && this.pergunta3 == 'nao' && this.pergunta4 == 'nao' && this.pergunta5 == 'sim'&& this.pergunta6 == 'nao' 
    && this.pergunta7 == 'nao' && this.pergunta8 == 'nao' && this.pergunta9 == 'nao'&& this.pergunta10 == 'sim'){
      this.res = "foi Cobra"
    } 
    else if(this.pergunta1 == "nao" && this.pergunta2 == 'nao' && this.pergunta3 == 'nao' && this.pergunta4 == 'sim' && this.pergunta5 == 'nao'&& this.pergunta6 == 'sim' 
    && this.pergunta7 == 'sim' && this.pergunta8 == 'sim' && this.pergunta9 == 'nao'&& this.pergunta10 == 'nao'){
      this.res = "foi Tartaruga"
    } 
    else if(this.pergunta1 == "sim" && this.pergunta2 == 'nao' && this.pergunta3 == 'sim' && this.pergunta4 == 'sim' && this.pergunta5 == 'sim'&& this.pergunta6 == 'sim' 
    && this.pergunta7 == 'sim' && this.pergunta8 == 'nao' && this.pergunta9 == 'nao'&& this.pergunta10 == 'nao'){
      this.res = "foi Cachorro"
    } 
    else if(this.pergunta1 == "sim" && this.pergunta2 == 'nao' && this.pergunta3 == 'sim' && this.pergunta4 == 'nao' && this.pergunta5 == 'sim'&& this.pergunta6 == 'sim' 
    && this.pergunta7 == 'sim' && this.pergunta8 == 'nao' && this.pergunta9 == 'sim'&& this.pergunta10 == 'nao'){
      this.res = " foi Gato"
    } 
    else{
      this.res = "um que não esta na lista"
    }
    this.exibirToast()
  }

  
  async exibirToast(){
    const toast = await this.toastcontroller.create({
      message: `O animal que você pensou  ${this.res}`,
      duration: 2000
    })
    toast.present()
  }
  
}
