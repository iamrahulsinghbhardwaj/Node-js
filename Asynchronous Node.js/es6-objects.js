const name='Rahul'

const userAge=19

const user={
    name,
    age:userAge,
    location:'Pathankot'
}

console.log(user)

const product={
    label:'Red notebook',
    price:3,
    stock:201,
    salePrice: undefined
}

const{label:productlabel,stock,rating=5}=product

console.log(productlabel)
console.log(stock)
console.log(rating)

const transaction=(type,{label,stock})=>{
    console.log(type,label,stock)
}

transaction('order',product)
