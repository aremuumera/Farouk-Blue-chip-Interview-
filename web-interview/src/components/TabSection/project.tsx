import { ProjectData } from '@/utils/constant';
import Image from 'next/image';
import React from 'react'





const Project = () => {

const getProjectStyles = (projectStatus: string) => {
  switch (projectStatus) {
      case 'In progress':
        return {
          backgroundColor: '#F1FAFF',
          color: '#00A3FF',
          width: '50%'
          
        };
        break;
      case 'To do':
        return {
          backgroundColor: '#F5F8FA',
          color: '#A1A5B7',
          width: '0%'
        };
        break;
      case 'Completed':
        return {
          backgroundColor: '#E8FFF3',
          color: '#50CD89',
          width: '100%'
        };
        break;
      case 'Overdue':
        return {
          backgroundColor: '#FFF5F8',
          color: '#F1416C'
        };
        break;
      default:
        break;
    }
    return {};
};

  return (
    <div>
       <div className='md:px-[18px] px-[10px] pb-[40px]'>

      <div className="w-full sm:block flex">
        <div className='flex justify-between md:flex-row flex-col  md:gap-[15px] gap-[10px] items-center py-[22px]'>
            <h1 className='text-[21px] font-semibold'>Craft Projects <span className='text-gray-400 text-[.8rem] '>Active</span></h1>
            <div className='flex flex-row md:justify-center justify-end gap-[10px]'>
              <div className='flex justify-center py-2 rounded-md bg-[#fff] gap-[10px] px-2'>
                <select 
                  className='border-none outline-none bg-transparent text-[.8rem] w-[86px] text-zinc-500'
                  name="" id="">
                  <option value="Active">Active</option>
                  <option value="In Progress">In Progress</option>
                  <option value="To do">To do</option>
                  <option value="Completed">Completed</option>
                  <option value="Overdue">Overdue</option>
                </select>
              </div>
              <button
                className='bg-primary text-white text-[12px] font-[700] px-4 py-2 rounded-md'
              >New Project</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ProjectData.map((item) => {
            const styles = getProjectStyles(item.projectStatus);
            return (
              <div
                key={item.id}
                className="p-[30px] bg-white w-full rounded-lg shadow-md"
                style={{borderBottomColor: styles.color, borderBottomWidth: '5px', borderInlineWidth: styles.width}}
              >
                
                <div className='flex justify-between items-center'>
                    <div 
                    className={`w-[40px] h-[40px] px-2 rounded-[5px] flex justify-between items-center`}
                    style={{ backgroundColor: styles.backgroundColor }}
                    >
                      <Image
                          src={item.logo}
                          alt={`${item.projectName} logo`}
                          width={20}
                          height={20}
                        />
                  </div>
                  <span
                   className={`text-[12px] px-[10px] py-[3px] rounded-sm  `}
                   style={{ backgroundColor: styles.backgroundColor, color: styles.color }}
                   >
                    {item.projectStatus}
                  </span>
                </div>
                <div className='py-[25px]'>
                  <h3 className="font-[700] text-[22px]">{item.projectName}</h3>
                  <p className="text-gray-400 pt-[5px] text-[15px]">{item.projectDescription}</p>
                </div>
                <div className='flex justify-start items-center gap-[10px]'>
                   <div className='border-[1px] border-dashed py-[6px] px-[8px] rounded-[8px] border-gray-300 '>
                     <p className="font-[700] text-[#5E6278] text-sm">{item.startDate}</p>
                     <p className="text-gray-500 text-[12px]">Due Date</p>
                   </div>
                   <div className='border-[1px] border-dashed py-[6px] px-[8px] rounded-[8px] border-gray-300 '>
                     <p className="font-[700] text-[#5E6278] text-sm">{item.projectBudget}</p>
                     <p className="text-gray-500 text-[12px]">Budget</p>
                   </div>
                </div>
                <div className="flex justify-between items-center mt-8">
                  <div className='flex gap-[10px]'>
                    {item.projectMembers.map((member, index) => (
                      <div key={index} className='w-[30px] h-[30px] rounded-full -mr-[17px] overflow-hidden'>
                        <Image
                          src={member}
                          alt="User"
                          width={30}
                          height={30}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
       </div>
    </div>
  )
}

export default Project
