import { MdError } from "react-icons/md";

export const BadReq = ({ message }) => {
  return (
    <div className="py-20 flex justify-center gap-2 items-center text-red-400">
      <MdError />
      {message}!
    </div>
  );
};
