# React Form Data to Card Project

## 📌 Project Introduction

Ye ek simple React project hai jisme user form fill karta hai aur **Submit** button click karta hai.

Form ka data:

1. `Regi` component me collect hota hai.
2. Fir `App` component ko bheja jata hai.
3. `App` us data ko array me save karta hai.
4. Fir `Card` component ko data diya jata hai.
5. `Card` `.map()` use karke har user ka card display karta hai.

Simple data flow:

```text
User Input
    ↓
Regi Component
    ↓
props.recivedata(formdata)
    ↓
App Component
    ↓
data State Array
    ↓
<Card data={data} />
    ↓
props.data.map()
    ↓
Multiple Cards Display
```

---

# 📁 Components

Project me mainly 3 components hain:

```text
App.jsx
   |
   ├── Regi.jsx
   |
   └── Card.jsx
```

Har component ka different kaam hai.

---

# 1️⃣ App Component

`App.jsx` parent component hai.

```jsx
const [data, setdata] = useState([])
```

Yaha `data` ek empty array hai.

Starting me:

```js
data = []
```

Abhi koi user submit nahi hua hai, isliye array empty hai.

---

## `recivedata` Function

```jsx
function recivedata(value) {
  setdata([
    ...data,
    value
  ])
}
```

Ye function `Regi` component se data receive karta hai.

Example:

Agar user form fill kare:

```js
{
  Name: "Rahul",
  password: "1234",
  gender: "male",
  age: "20"
}
```

To ye object `value` ke andar aayega.

Starting data:

```js
[]
```

Submit ke baad:

```js
[
  {
    Name: "Rahul",
    password: "1234",
    gender: "male",
    age: "20"
  }
]
```

Agar second user submit kare:

```js
[
  {
    Name: "Rahul",
    password: "1234",
    gender: "male",
    age: "20"
  },
  {
    Name: "Sunny",
    password: "5678",
    gender: "female",
    age: "21"
  }
]
```

Isliye hum likhte hain:

```js
...data
```

Purane users ko array me rakhne ke liye.

Aur:

```js
value
```

Naya user add karne ke liye.

---

# 2️⃣ App se Regi Component me Function Bhejna

App component me:

```jsx
<Regi recivedata={recivedata} />
```

Yaha parent component `App` apna function child component `Regi` ko props ke through bhej raha hai.

Simple language me:

```text
App kehta hai:

"Regi, ye mera function le jao.
Jab form submit ho,
mujhe data is function ke through bhej dena."
```

---

# 3️⃣ Regi Component me Props Receive Karna

Regi component:

```jsx
const Regi = (props) => {
```

Ab `props` ek object hai.

Us object ke andar App se bheji hui value hai.

```js
props = {
  recivedata: function
}
```

Isliye hum access kar sakte hain:

```js
props.recivedata
```

Ye wahi function hai jo App component ne bheja tha.

---

# 🔥 Important: `props.recivedata(formdata)`

```jsx
props.recivedata(formdata);
```

Ye project ka sabse important part hai.

Pehle samjho:

App se bheja tha:

```jsx
<Regi recivedata={recivedata} />
```

Iska matlab:

```js
props.recivedata
```

ke andar App ka function aa gaya.

Ab:

```jsx
props.recivedata(formdata)
```

Matlab:

```text
App ke recivedata function ko call karo
aur formdata uske andar bhejo.
```

Simple example:

```js
function recivedata(value) {
  console.log(value)
}
```

Agar call karo:

```js
recivedata("Hello")
```

To:

```js
value = "Hello"
```

Same tumhare project me:

```js
props.recivedata(formdata)
```

Matlab:

```js
formdata → value
```

App ke function me:

```jsx
function recivedata(value) {
```

To yaha:

```text
Regi ka formdata
        ↓
props.recivedata(formdata)
        ↓
App ka recivedata(value)
        ↓
value ke andar formdata
```

Example:

```js
formdata = {
  Name: "Sunny",
  password: "123",
  gender: "male",
  age: "22"
}
```

Jab:

```js
props.recivedata(formdata)
```

chalega.

To App me:

```js
function recivedata(value)
```

Yaha `value` ban jayega:

```js
value = {
  Name: "Sunny",
  password: "123",
  gender: "male",
  age: "22"
}
```

---

# 4️⃣ Form State

Regi component me:

```jsx
const [formdata, setformdata] = useState({
  Name: "",
  password: "",
  gender: "",
  age: ""
})
```

Ye form ka current data store karta hai.

Starting me:

```js
{
  Name: "",
  password: "",
  gender: "",
  age: ""
}
```

Jab user input deta hai:

```text
Name: Sunny
Password: 1234
Gender: Male
Age: 22
```

To state ban jayegi:

```js
{
  Name: "Sunny",
  password: "1234",
  gender: "male",
  age: "22"
}
```

---

# 5️⃣ `changehandel` Function

```jsx
function changehandel(e) {
  setformdata({
    ...formdata,
    [e.target.id]: e.target.value
  })
}
```

Ye function har input change hone par chalta hai.

Example input:

```jsx
<input
  id="Name"
  value={formdata.Name}
  onChange={changehandel}
/>
```

User likhta hai:

```text
Sunny
```

To:

```js
e.target.id
```

hoga:

```js
"Name"
```

Aur:

```js
e.target.value
```

hoga:

```js
"Sunny"
```

To ye line:

```js
[e.target.id]: e.target.value
```

ban jayegi:

```js
Name: "Sunny"
```

Aur `...formdata` baaki values ko preserve karta hai.

Final object:

```js
{
  Name: "Sunny",
  password: "",
  gender: "",
  age: ""
}
```

---

# 6️⃣ Form Submit

```jsx
function submitedhandling(e) {
  e.preventDefault();

  props.recivedata(formdata);
}
```

`e.preventDefault()` page ko reload hone se rokta hai.

Uske baad:

```js
props.recivedata(formdata)
```

current form ka pura object App component ko bhejta hai.

---

# 7️⃣ App me Data Array Save Hona

App me:

```jsx
setdata([
  ...data,
  value
])
```

Maan lo pehle:

```js
data = []
```

Naya form:

```js
value = {
  Name: "Sunny",
  age: "22"
}
```

To:

```js
data = [
  {
    Name: "Sunny",
    age: "22"
  }
]
```

Dusra form submit:

```js
value = {
  Name: "Rahul",
  age: "25"
}
```

To:

```js
data = [
  {
    Name: "Sunny",
    age: "22"
  },
  {
    Name: "Rahul",
    age: "25"
  }
]
```

---

# 8️⃣ App se Card Component me Data Bhejna

App component:

```jsx
<Card data={data} />
```

Yaha App `data` array Card component ko bhej raha hai.

Simple language:

```text
App:
"Card, ye mera data array hai.
Tum isko use karke cards dikhao."
```

---

# 9️⃣ Card Component me Props

Card component:

```jsx
export const Card = (props) => {
```

App se ye mila:

```jsx
<Card data={data} />
```

To Card me:

```js
props = {
  data: [...]
}
```

Isliye:

```js
props.data
```

likhkar hum array access kar sakte hain.

---

# 🔥 Important: `props.data.map()`

Tumhara code:

```jsx
props.data.map((user, index) => (
```

Sabse pehle:

```js
props.data
```

Ek array hai.

Example:

```js
[
  {
    Name: "Sunny",
    age: "22"
  },
  {
    Name: "Rahul",
    age: "25"
  }
]
```

`.map()` array ke har object par chalega.

---

## First Time

```js
user = {
  Name: "Sunny",
  age: "22"
}

index = 0
```

Card:

```jsx
<h2>{user.Name}</h2>
```

Output:

```text
Sunny
```

---

## Second Time

```js
user = {
  Name: "Rahul",
  age: "25"
}

index = 1
```

Card:

```text
Rahul
```

---

# `.map()` ka Simple Meaning

```text
Array ke andar jitne objects hain,
har object ke liye ek card banao.
```

Code:

```jsx
props.data.map((user, index) => (
  <div className="card">
    <h2>{user.Name}</h2>
  </div>
))
```

Agar 1 object hai:

```text
1 Card
```

Agar 3 objects hain:

```text
3 Cards
```

Agar 10 objects hain:

```text
10 Cards
```

---

# Complete Data Flow

## Step 1: User Input

```text
Name: Sunny
Age: 22
```

---

## Step 2: Regi State

```js
formdata = {
  Name: "Sunny",
  age: "22"
}
```

---

## Step 3: Submit

```js
props.recivedata(formdata)
```

---

## Step 4: App Function

```js
function recivedata(value)
```

Yaha:

```js
value = formdata
```

---

## Step 5: Array Update

```js
setdata([
  ...data,
  value
])
```

---

## Step 6: App → Card

```jsx
<Card data={data} />
```

---

## Step 7: Card

```js
props.data
```

Data receive karta hai.

---

## Step 8: `.map()`

```js
props.data.map()
```

Har user object ke liye ek card banata hai.

---

# 🔄 Parent and Child Communication

## Parent → Child

Data props ke through bhejte hain.

```jsx
<Card data={data} />
```

Card me:

```js
props.data
```

---

## Child → Parent

Child directly parent ka state change nahi kar sakta.

Isliye parent ek function child ko bhejta hai.

Parent:

```jsx
<Regi recivedata={recivedata} />
```

Child:

```js
props.recivedata(formdata)
```

Flow:

```text
Parent Function
      ↓
Props se Child ko bheja
      ↓
Child function call karta hai
      ↓
Data Parent ko milta hai
      ↓
Parent state update karta hai
```

---

# 🧠 Sabse Important Difference

## Ye data nahi bhej raha:

```jsx
props.recivedata
```

Ye sirf function ko access kar raha hai.

---

## Ye function ko call kar raha hai aur data bhej raha hai:

```jsx
props.recivedata(formdata)
```

Difference:

```js
props.recivedata
```

= Function reference

```js
props.recivedata(formdata)
```

= Function call + formdata argument pass

---

# Project Summary

```text
Regi
 |
 | formdata collect karta hai
 ↓
props.recivedata(formdata)
 |
 ↓
App
 |
 | data array me save karta hai
 ↓
<Card data={data} />
 |
 ↓
Card
 |
 ↓
props.data.map()
 |
 ↓
Har user ke liye Card Display
```

# Main Concepts Learned

* `useState`
* Controlled Inputs
* Form Handling
* `onChange`
* `onSubmit`
* `preventDefault()`
* Objects
* Arrays
* Spread Operator `...`
* Props
* Parent to Child Communication
* Child to Parent Communication
* Callback Function
* `.map()`
* Dynamic Card Rendering

---

# Final Simple Rule

```text
Regi → App
Function props ke through data bhejta hai.

App → Card
Props ke through data bhejta hai.

Card
.map() use karke array ke har object ka UI banata hai.
```

## Sabse Important Line

```js
props.recivedata(formdata)
```

Iska matlab:

```text
Child se Parent ko form data bhejna.
```

Aur:

```js
props.data.map()
```

Iska matlab:

```text
Parent se mila array loop karke
har object ka Card banana.
```
