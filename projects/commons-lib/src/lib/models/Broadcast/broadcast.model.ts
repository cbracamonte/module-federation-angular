export interface BroadCastModel {
  id: number;
  mfe: string;
  mfe_id: number;
  data: DataTransferModel;
}

interface DataTransferModel {
  code: number;
  status: string;
  message: string;
  data: any;
}
