// Classes and inheritance are amply used on current frameworks. 
class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    showGreeting(greeting){
        console.log(greeting);
    }

    showInfo(){
        return `
            <b>Name:</b>  ${this.name}<br />
            <b>Age:</b>  ${this.age}<br />
            <b>Email:</b>  ${this.email}<br />
            <hr />
        `
    }
}

class Student extends User {
    constructor(name, age, email, career) {
        super(name, age, email);
        this.career = career;
    }

    showInfo() {
        return `
            <b>Name:</b>  ${this.name}<br />
            <b>Age:</b>  ${this.age}<br />
            <b>Email:</b>  ${this.email}<br />
            <b>Career:</b>  ${this.career}<br />
            <hr />
        `
    }
}

const luis = new User('Luis Alberto Gomez', 20, 'luis@correo.com');
document.write(luis.showInfo());

const andres = new Student('Andres Fernando Saa', 24, 'andressaa.dev@gmail.com', 'Systems Engineering and Computing');
document.write(andres.showInfo());

const stiven = new Student('Stiven Lopez', 27, 'stivemaster@correo.com', 'Chemical Engineering');
document.write(stiven.showInfo());