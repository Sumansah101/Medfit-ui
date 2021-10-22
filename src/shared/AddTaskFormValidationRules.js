export default function validate(values) {
  let errors = {};
  if (!values.description) {
    errors.description = "Description is required";
  }
  if (!values.time) {
    errors.time = "DuratioN is required";
  }
  return errors;
}
