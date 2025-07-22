// In javaScript the keyword extends is used for inheritance

class Animal{
    alive = true;
}

class cat extends Animal{

    isalive(){
    console.log(this.alive);
    }
}

const c1 = new cat();
c1.isalive();
