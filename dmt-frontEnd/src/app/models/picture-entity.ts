export class PictureEntity{
    /**
	 *
	 * 用户id
	 */
	   userId:string;
	/**
	 *
	 * 图片类型id,从字典表中获取：公司、个人、景区等
	 */
	   pictureTypeId:string;
	/**
	 *
	 * 描述
	 */
	   description:string;

	/**
	 *
	 * 时间戳
	 */
	  timestampTime:Date;

       operatorId:string;
    remark:  string;
    createTime: string;
    updateTime: string;
    operator:  string;
}