
export default function Rout({ path, children }) {
  const pathName = window.location.pathname;

  if (pathName !== path) {
    return null;
  }
  return children;
}
