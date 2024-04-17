//  <div className={style["desktop-form"]}>
//                 {/* <ResponsiveContainer> */}
//                 <Components.Container>
//                     <Components.SignUpContainer $signin={signIn}>
//                         <Components.Form>
//                             <Components.Title>Create Account</Components.Title>
//                             <Components.Input
//                                 onChange={(e) => {
//                                     if (!e.target.value.toLowerCase().endsWith("@knit.ac.in")) {
//                                         setError({ ...error, email: "Enter Knit Domain Email" });
//                                     } else {
//                                         setError({ ...error, email: "" });
//                                         setUser({ ...user, email: e.target.value });
//                                     }
//                                 }}
//                                 type="email"
//                                 placeholder="Email(KNIT)"
//                                 style={{
//                                     outline: "none",
//                                     border: "2px solid",
//                                     borderColor: error.email ? "red" : "",
//                                 }}
//                             />
//                             <small>{error.email}</small>
//                             <Components.Input
//                                 onChange={(e) => {
//                                     if (e.target.value.length !== 10) {
//                                         setError({ ...error, contact: "Invalid Contact number" });
//                                     } else {
//                                         setError({ ...error, contact: "" });
//                                         setUser({ ...user, contact: e.target.value });
//                                     }
//                                 }}
//                                 style={{
//                                     outline: "none",
//                                     border: "2px solid",
//                                     borderColor: error.contact ? "red" : "",
//                                 }}
//                                 type="text"
//                                 placeholder="Contact No."
//                             />
// //                             <small>{error.contact}</small>
//                             <Components.Input
//                                 onChange={(e) => {
//                                     if (e.target.value.length < 5) {
//                                         setError({ ...error, password: "Password must be at least 5 characters long" });
//                                     } else {
//                                         setError({ ...error, password: "" });
//                                         setUser({ ...user, password: e.target.value });
//                                     }
//                                 }}
//                                 style={{
//                                     outline: "none",
//                                     border: "2px solid",
//                                     borderRadius: "5px",
//                                     borderColor: error.password ? "red" : "",
//                                 }}
//                                 type="password"
//                                 placeholder="Password"
//                             />
//                             <small>{error.password}</small>
//                             <Components.Button onClick={handleSignUp}>
//                                 Sign Up
//                             </Components.Button>
//                         </Components.Form>
//                     </Components.SignUpContainer>

