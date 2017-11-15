export class EducationEntity{
    /**
	 *
	 * 用户id
	 */
	    userId:string;
	/**
	 *
	 * 是否进入大米时代（0/1:前/后）
	 */
	isIndmt:Number;
	/**
	 *
	 * 证书编号
	 */
	    certificateNo:string;
	/**
	 *
	 * 证书名
	 */
	    certificateName:string;
	/**
	 *
	 * 证书类型
	 */
	   certificateType:number;
	/**
	 *
	 * 获取时间
	 */
	   receiveTime:Date;
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