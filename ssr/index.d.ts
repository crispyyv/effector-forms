// Generated by dts-bundle-generator v6.2.0

import { Domain, Event, Store } from 'effector';

export declare type InitFieldValue<Value> = () => Value;
export declare type ValidationEvent = "submit" | "blur" | "change";
export declare type ValidationResult = {
	isValid: boolean;
	errorText?: string;
};
export declare type Validator<Value, Form = any, Source = any> = (value: Value, form?: Form, source?: Source) => boolean | ValidationResult;
export declare type ValidationError<Value = any> = {
	rule: string;
	value: Value;
	errorText?: string;
};
export declare type Rule<Value, Form = any, Source = any> = {
	name: string;
	errorText?: string;
	source?: Store<Source>;
	validator: Validator<Value, Form, Source>;
};
export declare type FieldData<Value> = {
	value: Value;
	errors: ValidationError<Value>[];
	firstError: ValidationError<Value> | null;
	isValid: boolean;
	isDirty: boolean;
	isTouched: boolean;
};
export declare type Field<Value> = {
	name: string;
	$value: Store<Value>;
	$errors: Store<ValidationError<Value>[]>;
	$firstError: Store<ValidationError<Value> | null>;
	$isValid: Store<boolean>;
	$isDirty: Store<boolean>;
	$isTouched: Store<boolean>;
	$touched: Store<boolean>;
	$field: Store<FieldData<Value>>;
	onChange: Event<Value>;
	changed: Event<Value>;
	onBlur: Event<void>;
	addError: Event<{
		rule: string;
		errorText?: string;
	}>;
	validate: Event<void>;
	reset: Event<void>;
	set: Event<Value>;
	resetErrors: Event<void>;
	resetValue: Event<void>;
	filter?: Store<boolean> | FilterFunc<Value>;
};
export declare type FilterFunc<Value> = (value: Value) => boolean;
export declare type RuleResolver<Value = any, Form = any> = (value: Value, form: Form) => Rule<Value, Form, void>[];
export declare type FieldConfig<Value> = {
	init: Value | InitFieldValue<Value>;
	rules?: Rule<Value>[] | RuleResolver<Value, any>;
	filter?: Store<boolean> | FilterFunc<Value>;
	validateOn?: ValidationEvent[];
	units?: {
		$value?: Store<Value>;
		$errors?: Store<ValidationError<Value>[]>;
		$isTouched?: Store<boolean>;
		onChange?: Event<Value>;
		changed?: Event<Value>;
		onBlur?: Event<void>;
		addError?: Event<{
			rule: string;
			errorText?: string;
		}>;
		validate?: Event<void>;
		resetValue?: Event<void>;
		reset?: Event<void>;
		resetErrors?: Event<void>;
	};
};
export declare type AnyFieldsConfigs = {
	[key: string]: FieldConfig<any>;
};
export declare type FormValues<Fields extends AnyFieldsConfigs> = {
	[K in keyof Fields]: Fields[K] extends FieldConfig<infer U> ? U : never;
};
export declare type FormConfig<Fields extends AnyFieldsConfigs> = {
	fields: Fields;
	domain?: Domain;
	filter?: Store<boolean>;
	validateOn?: ValidationEvent[];
	units?: {
		submit?: Event<void>;
		validate?: Event<void>;
		reset?: Event<void>;
		resetValues?: Event<void>;
		resetTouched?: Event<void>;
		resetErrors?: Event<void>;
		formValidated?: Event<FormValues<Fields>>;
		setForm?: Event<Partial<FormValues<Fields>>>;
	};
};
export declare type Form<Fields extends AnyFieldsConfigs> = {
	fields: {
		[K in keyof Fields]: Fields[K] extends FieldConfig<infer U> ? Field<U> : never;
	};
	$values: Store<FormValues<Fields>>;
	$eachValid: Store<boolean>;
	$isValid: Store<boolean>;
	$isDirty: Store<boolean>;
	$touched: Store<boolean>;
	$meta: Store<{
		isValid: boolean;
		isDirty: boolean;
		touched: boolean;
	}>;
	submit: Event<void>;
	validate: Event<void>;
	reset: Event<void>;
	set: Event<Partial<FormValues<Fields>>>;
	setForm: Event<Partial<FormValues<Fields>>>;
	resetTouched: Event<void>;
	resetValues: Event<void>;
	resetErrors: Event<void>;
	formValidated: Event<FormValues<Fields>>;
};
export declare function createForm<Fields extends AnyFieldsConfigs>(config: FormConfig<Fields>): Form<Fields>;
export declare type ErrorTextMap = {
	[key: string]: string;
};
export declare type AddErrorPayload = {
	rule: string;
	errorText?: string;
};
export declare type ConnectedField<Value> = {
	name: string;
	value: Value;
	errors: ValidationError<Value>[];
	firstError: ValidationError<Value> | null;
	hasError: () => boolean;
	onChange: (v: Value) => Value;
	onBlur: (v: void) => void;
	errorText: (map?: ErrorTextMap) => string;
	addError: (p: AddErrorPayload) => AddErrorPayload;
	validate: (v: void) => void;
	isValid: boolean;
	isDirty: boolean;
	isTouched: boolean;
	touched: boolean;
	reset: (v: void) => void;
	set: (v: Value) => Value;
	resetErrors: (v: void) => void;
};
export declare type ConnectedFields<Fields extends AnyFieldsConfigs> = {
	[K in keyof Fields]: Fields[K] extends FieldConfig<infer U> ? ConnectedField<U> : never;
};
export declare function useField<Value>(field: Field<Value>): ConnectedField<Value>;
export declare type Result<Fields extends AnyFieldsConfigs> = {
	fields: ConnectedFields<Fields>;
	values: FormValues<Fields>;
	hasError: (fieldName?: keyof Fields) => boolean;
	eachValid: boolean;
	isValid: boolean;
	isDirty: boolean;
	isTouched: boolean;
	touched: boolean;
	errors: (fieldName: keyof Fields) => (Fields[typeof fieldName] extends FieldConfig<infer U> ? ValidationError<U>[] : never);
	error: (fieldName: keyof Fields) => (Fields[typeof fieldName] extends FieldConfig<infer U> ? ValidationError<U> : never) | null;
	errorText: (fieldName: keyof Fields, map?: ErrorTextMap) => string;
	submit: (p: void) => void;
	reset: (p: void) => void;
	setForm: (p: Partial<FormValues<Fields>>) => Partial<FormValues<Fields>>;
	set: (p: Partial<FormValues<Fields>>) => Partial<FormValues<Fields>>;
	formValidated: (p: FormValues<Fields>) => FormValues<Fields>;
};
export declare function useForm<Fields extends AnyFieldsConfigs>(form: Form<Fields>): Result<Fields>;

export {};
