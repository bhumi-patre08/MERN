import { useState } from "react";
import axios from "axios";
import { userSchema } from "../schemas/userSchema";
function Register() {
 const [form, setForm] = useState({
 name: "",
 email: "",
 age: "",
 password: ""
 });
 const [errors, setErrors] = useState({});
 const handleChange = (e) => {
 setForm({
 ...form,
 [e.target.name]: e.target.value
 });
 };
 const handleSubmit = async (e) => {
 e.preventDefault();
 const data = {
 ...form,
 age: Number(form.age)
 };
 const result = userSchema.safeParse(data);
 if (!result.success) {
 const fieldErrors = {};
 result.error.issues.forEach(error => {
 fieldErrors[error.path[0]] = error.message;
 });
 setErrors(fieldErrors);
 return;
 }
 setErrors({});
 try {
 const response = await axios.post(
 "http://localhost:5000/api/users/register",
 result.data
 );
 alert(response.data.message);
 } catch (error) {
 if (error.response?.data?.errors) {
 const serverErrors = {};
 error.response.data.errors.forEach(error => {
 serverErrors[error.field] = error.message;
 });
 setErrors(serverErrors);
 }
 }
 };
 return (
 <form onSubmit={handleSubmit}>
 <input name="name"
 placeholder="Name"
 value={form.name}
 onChange={handleChange}
 />
 <p>{errors.name}</p>
 <input
 name="email"
 placeholder="Email"
 value={form.email}
 onChange={handleChange}
 />
 <p>{errors.email}</p>
 <input
 type="number"
 name="age"
 placeholder="Age"
 value={form.age}
 onChange={handleChange}
 />
 <p>{errors.age}</p>
 <input
 type="password"
 name="password"
 placeholder="Password"
 value={form.password}
 onChange={handleChange}
 />
 <p>{errors.password}</p>
 <button type="submit">
 Register
 </button>
 </form>
 );
}
export default Register;