export interface ApiParameter {
	Name: string;
	Type: ApiValueType;
	Default?: string;
}

export type SecurityType =
	| "None"
	| "LocalUserSecurity"
	| "PluginSecurity"
	| "RobloxScriptSecurity"
	| "RobloxSecurity"
	| "NotAccessibleSecurity";

export type MemberCategoryType =
	| "instance/object"
	| "animation/instance"
	| "instance/mesh"
	| "render/decal"
	| "instance/gui"
	| "physics/joint"
	| "lua/script"
	| "instance/part"
	| "sound/default";

export type CategoryType =
	| "Appearance"
	| "Attachments"
	| "Behavior"
	| "Camera"
	| "Compliance"
	| "Data"
	| "Derived Data"
	| "Goals"
	| "Image"
	| "Shape"
	| "Thrust"
	| "Turn";

export interface ApiMemberBase {
	MemberType: string;
	Name: string;
	Security:
		| SecurityType
		| {
				Read: SecurityType;
				Write: SecurityType;
		  };
	Tags?: Array<string>;
}

export interface ApiValueType {
	Category: "Primitive" | "Class" | "DataType" | "Enum" | "Group";
	Name: string;
}

export interface ApiProperty extends ApiMemberBase {
	MemberType: "Property";
	Category: CategoryType;
	Serialization: {
		CanLoad: boolean;
		CanSave: boolean;
	};
	ValueType: ApiValueType;
}

export interface ApiFunction extends ApiMemberBase {
	MemberType: "Function";
	Parameters: Array<ApiParameter>;
	ReturnType: ApiValueType;
}

export interface ApiEvent extends ApiMemberBase {
	MemberType: "Event";
	Parameters: Array<ApiParameter>;
}

export interface ApiCallback extends ApiMemberBase {
	MemberType: "Callback";
	Parameters: Array<ApiParameter>;
}

type ApiMember = ApiProperty | ApiFunction | ApiEvent | ApiCallback;

export interface ApiClass {
	Members: Array<ApiMember>;
	MemoryCategory: MemberCategoryType;
	Tags?: Array<string>;
	Name: string;
	Superclass: string;
}

export interface ApiEnumItem {
	Name: string;
	Value: number;
}

export interface ApiEnum {
	Items: Array<ApiEnumItem>;
	Name: string;
}

export interface ApiDump {
	Classes: Array<ApiClass>;
	Enums: Array<ApiEnum>;
	Version: number;
}