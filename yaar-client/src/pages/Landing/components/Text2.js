import styles from "./style";
import budget from "./budget.png"
import spend from "./spend.png"
import chart from "./chart.png"
import contribution from "./contribution.png"

const Text2 = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      <p className="text-white max-w-[500px] mt-4 flex-col">
        {/* Everything you need to be in budget is here! */}
      </p>

   <div className="flex flex-row">
    <div className=" w-[85px]">
    <img src={budget} alt="djjwwws" className="flex flex-1 flex-row h-[65px]"/></div>
    <div className="text-white flex-1 flex flex-col">
    <b> Category-based budgets: </b>
    <p className="mt-2">
    Users can set a budget for each category, and transfer funds between categories if necessary.
    </p>
    </div>

    <div className=" w-[85px]">
    <img src={spend} alt="djjwwws" className="flex flex-1 flex-row h-[65px]"/></div>
    <div className="text-white flex-1 flex flex-col mt-3">
      <b>Category-based spending: </b>
      <p className="mt-2">
      Users can group expenses under specific categories, and track their spending within those categories.
      </p>
    </div>
    </div>

    <div className="flex flex-row">
    <div className=" w-[85px]">
    <img src={chart} alt="djjwwws" className="flex flex-1 flex-row h-[65px] "/></div>
    <div className="text-white flex-1 flex flex-col mt-4">
      <b>Category spend analysis: </b>
      <p className="mt-2">
      Users can view bar graphs, pie charts, and other data representations of their spending and income.
      </p>
    </div>
    
    <div className=" w-[85px]">
    <img src={contribution} alt="djjwwws" className="flex flex-1 flex-row h-[65px]"/></div>
    <div className="text-white flex-1 flex flex-col mt-3">
      <b>Contribution tracker: </b>
      <p className="mt-2">
      Users can track their contributions to group purchases, and any money owed to or from friends and family.
      </p>
    </div>
    </div>

    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
    </div>
  </section>

);

export default Text2;