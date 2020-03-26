import nextId from "react-id-generator";

const KEY_GENERATOR = (prefix = "id") => nextId(prefix);

export default KEY_GENERATOR;
