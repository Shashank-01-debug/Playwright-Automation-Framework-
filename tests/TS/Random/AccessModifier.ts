class Modifier{

public animal(){
    console.log("this method is public");
    
}

protected clear(){
    console.log('this method is protected.');
    
}

private fill(){
    console.log('this method is private in nature');
    
}
//! we keep both protected and private method inside public method --> read(). It is a kind of encapsulation.

public read(){
    this.clear();
    this.fill();
}

static url ='https://www.google.com'
static username(){
    console.log('this method is static');
    
}

readonly pi=3.14



}

let m = new Modifier();
m.animal()
console.log(m.pi);
console.log(Modifier.url);
//! but we can't access private and protected properties outside the class through the object.
m.read();

