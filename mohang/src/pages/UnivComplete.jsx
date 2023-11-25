import { useState } from "react";
import CTABtn from "../components/CTABtn";
import Layout from "../layout/Layout";
import { IoMdAddCircle } from "react-icons/io";
import backIcon from "../assets/images/back.png";
import { Link } from "react-router-dom";

function UnivComplete() {
  const [univAuth, setUnivAuth] = useState(true);
  return (
    <Layout>
    <section className="flex flex-col px-[22px] py-4">
        <img
            src={backIcon}
            alt="backIcon"
            className=" object-cover w-[30px] h-[30px] mt-[10px] "
          />      
      <div className="flex flex-col justify-center items-center h-[60vh]">
          <>
            <div className="text-center text-xl semibold text-gray3 space-y-7">
              <p>
                <h4>대학인증이 완료되었어요!</h4>
                <h4>행사를 등록하러 가보세요</h4>
              </p>
            </div>
            <IoMdAddCircle
              size={60}
              className="fixed bottom-10 right-7 text-primary"
            />
            <Link to="/event/regist">
            <CTABtn title={"행사 등록하러 가기"}/>
            </Link>
          </>
      </div>
      </section>
      </Layout>
  );
}


export default UnivComplete;
