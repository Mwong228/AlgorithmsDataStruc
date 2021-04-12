//Big O notation for Storage in Objects

// Insertion - O(1)
// Removal - O(1)
// Searching - O(n)
// Access - O(1)


let person = {
    firstName: "Michael",
    isMale: true,
    hobbies: ["gaming", "eating", "soccer"]
}

//Big O methods

// Object.keys(person) --> O(n)
    //["firstName", "isMale", "hobbies"]

//Object.entries(person) --> O(n)

//Object.values(person) --> O(n)

//person.hasOwnProperty("firstName") --> O(1)
    // true