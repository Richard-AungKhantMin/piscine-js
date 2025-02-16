function newObj() {
this.b = 21
  }

const a = new newObj()
console.log(a)

function withoutNew(){
    let obj ={}
    obj.b = 69
    return obj
}

const z = withoutNew()
console.log(z)

/*

type Person struct {
    Name string
    Age  int
}

func NewPerson(name string, age int) *Person {
    return &Person{Name: name, Age: age}
}

func main() {
    user := NewPerson("Alice", 25)
    fmt.Println(user)  // &{Alice 25}
}

*/