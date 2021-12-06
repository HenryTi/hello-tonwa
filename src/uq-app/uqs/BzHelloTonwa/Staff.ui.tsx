// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemNumber, FieldItemString, FieldItemId, FieldItemInt, UI, TFunc } from 'tonwa-react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, uqStringify, setRes } from "tonwa-core";
import { Staff } from "./BzHelloTonwa";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	no: {
		"name": "no",
		"type": "string",
		"isKey": true,
		"widget": "string",
		"label": "No"
	} as FieldItemString,
	firstName: {
		"name": "firstName",
		"type": "string",
		"isKey": false,
		"widget": "string",
		"label": "FirstName"
	} as FieldItemString,
	lastName: {
		"name": "lastName",
		"type": "string",
		"isKey": false,
		"widget": "string",
		"label": "LastName"
	} as FieldItemString,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.no, fields.firstName, fields.lastName, 
];

export const ui: UI = {
	label: "Staff",
	fieldArr,
	fields,
};

const resRaw: Res<any> = {
	$zh: {
	},
	$en: {
	}
};
const res: any = {};
setRes(res, resRaw);

export const t:TFunc = (str:string|JSX.Element): string|JSX.Element => {
	return res[str as string] ?? str;
}

export function render(item: Staff):JSX.Element {
	return <>{uqStringify(item)}</>;
};
