// Liskov Substitution Principle

// class Person {

// }

// class Member {
//     access() {
//         console.log('Access given!')
//     }
// }

// class NotMember {
//     access() {
//         console.log('Access deny(((')
//     }
// }

// class Front extends Member {
//     canCreateFrontend() {}
// }

// class Back extends Member {
//     canCreateBackend() {}
// }

// class PersonFromDiffComp extends NotMember{
//     access() {
//         throw new Error('Access deny')
//     }
// }

// function openSecretDoor(member) {
//     person.access()
// }

// openSecretDoor(new Front())
// openSecretDoor(new Back())

//=======================

class Component {
    isComponent = true
}

class ComponentWithTemplate extends Component {
    render() {
        return `<div>Component</div>`
    }
}

class HigherOrderComponent extends Component {

}

class HeaderComponent extends ComponentWithTemplate {
    onInit() {}
}

class FooterComponent extends ComponentWithTemplate {
    afterInit() {}
}

class HOC extends HigherOrderComponent {
    render() {
        throw new Error('Render is impossible')
    }
    
    static wrapComponent(component) {
        component.wrapped = true
        return component
    }
}

function renderComponent(component) {
    console.log(component.render())
}

renderComponent(new HeaderComponent())
renderComponent(new FooterComponent())
renderComponent(HOC.wrapComponent(new HeaderComponent))
