import { MatchesProps } from "../../types/matchesProps";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export const columns: ColumnDef<MatchesProps>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "result",
    header: "Result",
  },
  {
    accessorKey: "attendance",
    header: ({ column }) => (
      <div
        className="text-center"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <Button style={{ cursor: "pointer" }} variant="ghost">
          Attendance
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("attendance"));
      const formatted = new Intl.NumberFormat("en-US", {}).format(amount);
      return <div className="text-center font-medium">{formatted}%</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const info = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent style={{ width: "500px" }} align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(info.id)}
            >
              Copy match ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
