export interface userDataProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface listDataProps{
    department:String;
    sub_departments:string[];
}

export const listData=[
	{
  	 department: "customer_service",
  	 sub_departments: [
    	"support",
    	"customer_success"
  	]
	},
	{
  	department: "design",
  	sub_departments: [
    	"graphic_design",
    	"product_design",
    	"web_design"
  	]
	}
  ];
