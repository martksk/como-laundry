import { ITable } from "@/interface/Table";
import { FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TableProps {
  tableData1: ITable[];
  tableData3: ITable[];
  WashingDrumData: ITable[];
  Rotation_speedData: ITable[];
  diameterData: ITable[];
}

export const TableComponent: FC<TableProps> = (props) => {
  const {
    tableData1,
    tableData3,
    WashingDrumData,
    Rotation_speedData,
    diameterData,
  } = props;

  return (
    <div className="overflow-x-auto rounded-lg">
      <Table className="w-full text-lg bg-slate-500/5 rounded-lg">
        <TableHeader>
          <TableRow>
            <TableHead className="text-black font-semibold text-center">
              ปริมาณ(ซัก/อบแห้ง)
            </TableHead>
            <TableHead></TableHead>
            <TableHead className="text-black font-semibold text-center">
              12kg/8kg
            </TableHead>
            <TableHead className="text-black font-semibold text-center">
              17kg/11kg
            </TableHead>
            <TableHead className="text-black font-semibold text-center">
              27kg/18kg
            </TableHead>
            <TableHead className="text-black font-semibold text-center">
              35kg/25kg
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData1.map((data: ITable, index: number) => (
            <TableRowComponents key={index} data={data} />
          ))}
          {WashingDrumData.map((data: ITable, index: number) => (
            <SubTable
              key={index}
              data={data}
              catagory="ถังซัก"
              index={index}
              array={WashingDrumData}
            />
          ))}
          {Rotation_speedData.map((data: ITable, index: number) => (
            <SubTable
              key={index}
              data={data}
              catagory="ความเร็วหมุนรอบ(รอบ/นาที)"
              index={index}
              array={Rotation_speedData}
            />
          ))}
          {diameterData.map((data: ITable, index: number) => (
            <SubTable
              key={index}
              data={data}
              catagory="เส้นผ่านศูนย์กลางท่อ"
              index={index}
              array={diameterData}
            />
          ))}
          {tableData3.map((data: ITable, index: number) => (
            <TableRowComponents key={index} data={data} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const TableRowComponents = ({ data }: { data: ITable }) => {
  return (
    <TableRow>
      <TableCell className="text-center">{data.title}</TableCell>
      <TableCell></TableCell>
      <TableCell className="text-center">{data.sizeS}</TableCell>
      <TableCell className="text-center">{data.sizeM}</TableCell>
      <TableCell className="text-center">{data.sizeL}</TableCell>
      <TableCell className="text-center">{data.sizeXL}</TableCell>
    </TableRow>
  );
};

const SubTable = ({
  data,
  catagory,
  index,
  array,
}: {
  data: ITable;
  catagory: string;
  index: number;
  array: ITable[];
}) => {
  return (
    <TableRow key={index}>
      {index === 0 && (
        <TableCell rowSpan={array.length} className="text-center">
          {catagory}
        </TableCell>
      )}
      <TableCell className="text-center">{data.title}</TableCell>
      <TableCell className="text-center">{data.sizeS}</TableCell>
      <TableCell className="text-center">{data.sizeM}</TableCell>
      <TableCell className="text-center">{data.sizeL}</TableCell>
      <TableCell className="text-center">{data.sizeXL}</TableCell>
    </TableRow>
  );
};
