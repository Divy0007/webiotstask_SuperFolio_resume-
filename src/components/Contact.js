import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

//validation schema in yup
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Required")
    .min(2, "Too Short!")
    .max(10, "Too Long!"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  userName: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  city: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("Required"),
  zip: Yup.string().required("Required"),
  picked: Yup.string().required("Required"),
  terms: Yup.boolean().oneOf([true], "Required"),
});

//start function component
const Contact = () => {
  return (
    <div className=" container-sm w-75 my-5 ">
      <h1 className="text-center m-3">contact us</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          userName: "",
          email: "",
          city: "",
          zip: "",
          checked: [],
          picked: "",
          terms: false,
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log("hello");
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="row g-3 needs-validation">
            {/* user name input */}
            <div className="col-md-4">
              <label htmlFor="validationCustom01" className="form-label">
                First name
              </label>
              <Field name="firstName" className="form-control" />

              {errors.firstName && touched.firstName ? (
                <div className="text-danger">{errors.firstName}</div>
              ) : null}
            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom02" className="form-label">
                Last name
              </label>
              <Field name="lastName" className="form-control" />
              {errors.lastName && touched.lastName ? (
                <div className="text-danger">{errors.lastName}</div>
              ) : null}
            </div>

            {/* last name input */}
            <div className="col-md-4">
              <label htmlFor="validationCustomUsername" className="form-label">
                Username
              </label>
              <div className="input-group has-validation">
                <span className="input-group-text" id="inputGroupPrepend">
                  @
                </span>
                <Field name="userName" type="text" className="form-control" />
              </div>
              {errors.userName && touched.userName ? (
                <div className="text-danger">{errors.userName}</div>
              ) : null}
            </div>

            {/* email input */}
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <Field
                name="email"
                type="email"
                className="form-control"
                placeholder="name@example.com"
              />
              {errors.email && touched.email ? (
                <div className="text-danger">{errors.email}</div>
              ) : null}
            </div>

            {/* city input */}
            <div className="col-md-6">
              <label htmlFor="validationCustom03" className="form-label">
                City
              </label>
              <Field name="city" type="text" className="form-control" />
              {errors.city && touched.city ? (
                <div className="text-danger">{errors.city}</div>
              ) : null}
            </div>

            {/* zip number input */}
            <div className="col-md-3">
              <label htmlFor="validationCustom05" className="form-label">
                Zip
              </label>
              <Field type="number" className="form-control" name="zip" />
              {errors.zip && touched.zip ? (
                <div className="text-danger">{errors.zip}</div>
              ) : null}
            </div>

            {/* checkbox input */}
            <div
              role="group"
              aria-labelledby="checkbox-group"
              className="form-check form-check-inline"
            >
              <label className="form-check-label ms-2 me-5">
                <Field
                  type="checkbox"
                  name="checked"
                  value="For Dealing"
                  className="form-check-input"
                />
                For Dealing
              </label>
              <label className="form-check-label ms-2 me-5">
                <Field
                  type="checkbox"
                  name="checked"
                  value="For Meating"
                  className="form-check-input"
                />
                For Meating
              </label>
              <label className="form-check-label">
                <Field
                  type="checkbox"
                  name="checked"
                  value="For issue"
                  className="form-check-input"
                />
                For issue
              </label>
            </div>

            {/* radio button input */}
            <div
              role="group"
              aria-labelledby="my-radio-group"
              className="form-check form-check-inline"
            >
              <label className="form-check-label me-5 ms-2">
                <Field
                  type="radio"
                  name="picked"
                  value="male"
                  className="form-check-input"
                />
                male
              </label>
              <label className="form-check-label">
                <Field
                  type="radio"
                  name="picked"
                  value="female"
                  className="form-check-input"
                />
                female
              </label>
            </div>

            {/* term check compulsory input */}
            <div className="col-12">
              <div className="form-check">
                <Field
                  className="form-check-input"
                  type="checkbox"
                  name="terms"
                />
                <label className="form-check-label" htmlFor="invalidCheck">
                  Agree to terms and conditions
                </label>
                {errors.terms && touched.terms ? (
                  <div className="text-danger">{errors.terms}</div>
                ) : null}
              </div>
            </div>

            {/* submit button */}
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
