import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent {
products:any =[
  { productname: 'pen',price: 10, rating: 3, freedelivery:true},
  { productname: 'phone',price: 1000, rating: 2, freedelivery:false},
  { productname: 'shirt',price: 400, rating: 4, freedelivery:true},
  { productname: 'cap',price: 200, rating: 5, freedelivery:false},
  { productname: 'mobile case',price: 300, rating: 2, freedelivery:true},
  { productname: 'remote',price: 400, rating: 2.5, freedelivery:false},
];
delete(i:number){
 this.products.splice(i,1);
}
text:any;
search(){
  this.products=this.products.filter((product:any)=>(product.productname.includes(this.text)));

}
free(){
  this.products=this.products.filter((product:any)=>(product.freedelivery==true));
}
sort1(){
  this.products.sort((a:any,b:any)=>(a.price-b.price));

}
sort2(){
  this.products.sort((a:any,b:any)=>(b.price-a.price));

}
sort3(){
  this.products.sort((a:any,b:any)=>(a.rating-b.rating));

}
sort4(){
  this.products.sort((a:any,b:any)=>(b.rating-a.rating));

}
discount(){
  
    this.products=this.products.map((product:any)=>{
      product.price=product.price * 0.5;
      return product
  })
}
delivery(){
  this.products=this.products.map((product:any)=>{
    if
      (product.freedelivery==false){
        product.price=product.price + 150;
    }
    return product
})
}
sum(){
  let totalcost=this.products.reduce((sum:any,product:any)=>sum+product.price,0);
  alert(totalcost);
}
cart(){
 
    let totalcost=this.products.reduce((sum:any,product:any,i:any)=>i+1);
    alert(totalcost);
  
}
productname:string="";
price:number=0;
rating:number=0;
delivery1:boolean=true;
add(){
  let product={
    productname:this.productname,
    price:this.price,
    rating:this.rating,
    freedelivery:this.delivery1,
   
  };
  this.products.unshift(product);
}
}
