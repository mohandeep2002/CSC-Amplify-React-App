import react from "react";

export function BaseHeader() {
  let fullyear = new Date().getFullYear();
  return (
    <div className="footer">
      <center>
        Mohandeep Atmuri &copy; {fullyear - 1} - {fullyear}
      </center>
    </div>
  );
}
