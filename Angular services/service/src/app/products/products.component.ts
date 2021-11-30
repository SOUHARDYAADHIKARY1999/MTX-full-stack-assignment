import { Component, OnInit } from '@angular/core';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder,FormGroup} from '@angular/forms';
import { Product } from './products.model';
import { ApiService } from '../services/api.service';


declare var $:any;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  formValue !:FormGroup;
  productObj:Product=new Product();

  productData :Product[]=[];
  showAdd!:boolean;
  showUpdate!:boolean;

  closeResult = '';

  productName:any;
  productId:any;

  constructor(private modalService:NgbModal,private formBuilder:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      productId:[''],
      productName:[''],
      productPrice:['']
    })
    this.getAllProducts();
  }

  open(content: any) {
    this.showAdd=true;
    this.showUpdate=false;
    //let ref = document.getElementById('open')
    //ref?.click();
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  postProductDetails(){
    this.productObj.productId=this.formValue.value.productId;
    this.productObj.productName=this.formValue.value.productName;
    this.productObj.productPrice=this.formValue.value.productPrice;

    this.api.postProduct(this.productObj)
    .subscribe(res=>{
      console.log(res);
      alert("Employee added sucessfully");

      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllProducts();
    },
    err=>{
      alert("Something happened");
    })
    this.getAllProducts();
  }

  getAllProducts(){
    this.api.getProduct()
    .subscribe(res=>{
      console.log(res);
      this.productData=res
    })
  }

  deleteProductById(row:any){
    this.api.deleteProduct(row.id)
    .subscribe(res=>{
      console.log("product deleted");
      alert("Employee deleted");
      this.getAllProducts();
    })
  }
  onEdit(row:any){
    let ref = document.getElementById('open')
      ref?.click();
    this.showAdd=false;
    this.showUpdate=true;
    this.productObj.productId =row.id;
    this.formValue.controls['productId'].setValue(row.productId);
    this.formValue.controls['productName'].setValue(row.productName);
    this.formValue.controls['productPrice'].setValue(row.productPrice);
    
  }
  updateProductDetails(){
    //this.productObj.productId=this.formValue.value.productId;
    this.productObj.productName=this.formValue.value.productName;
    this.productObj.productPrice=this.formValue.value.productPrice;

    this.api.updateProduct(this.productObj,this.productObj.productId)
    .subscribe(res=>{
      console.log("edited product",res);
      alert("Updated sucessfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllProducts();
    })
  }

  searchByName(){
    if(this.productName==""){
      this.api.getProduct().subscribe(res=>{
        this.productData=res
      })
    }
    else{
      this.productData=this.productData.filter(res=>{
        return res.productName.toLocaleLowerCase().match(this.productName.toLocaleLowerCase());
      })
    }
  }
  searchById(){
    if(this.productId==null){
      this.api.getProduct().subscribe(res=>{
        this.productData=res
      })
    }
    else{
      this.productData=this.productData.filter(res=>{
        return res.productId.toLocaleString().toLocaleLowerCase().match(this.productId.toLocaleString().toLocaleLowerCase());
      })
    }
  }
  
}
