/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AssetNodeDefinitionFragment
// ====================================================

export interface AssetNodeDefinitionFragment_repository_location {
  __typename: "RepositoryLocation";
  id: string;
  name: string;
}

export interface AssetNodeDefinitionFragment_repository {
  __typename: "Repository";
  id: string;
  name: string;
  location: AssetNodeDefinitionFragment_repository_location;
}

export interface AssetNodeDefinitionFragment_metadataEntries_PathMetadataEntry {
  __typename: "PathMetadataEntry";
  label: string;
  description: string | null;
  path: string;
}

export interface AssetNodeDefinitionFragment_metadataEntries_JsonMetadataEntry {
  __typename: "JsonMetadataEntry";
  label: string;
  description: string | null;
  jsonString: string;
}

export interface AssetNodeDefinitionFragment_metadataEntries_UrlMetadataEntry {
  __typename: "UrlMetadataEntry";
  label: string;
  description: string | null;
  url: string;
}

export interface AssetNodeDefinitionFragment_metadataEntries_TextMetadataEntry {
  __typename: "TextMetadataEntry";
  label: string;
  description: string | null;
  text: string;
}

export interface AssetNodeDefinitionFragment_metadataEntries_MarkdownMetadataEntry {
  __typename: "MarkdownMetadataEntry";
  label: string;
  description: string | null;
  mdStr: string;
}

export interface AssetNodeDefinitionFragment_metadataEntries_PythonArtifactMetadataEntry {
  __typename: "PythonArtifactMetadataEntry";
  label: string;
  description: string | null;
  module: string;
  name: string;
}

export interface AssetNodeDefinitionFragment_metadataEntries_FloatMetadataEntry {
  __typename: "FloatMetadataEntry";
  label: string;
  description: string | null;
  floatValue: number | null;
}

export interface AssetNodeDefinitionFragment_metadataEntries_IntMetadataEntry {
  __typename: "IntMetadataEntry";
  label: string;
  description: string | null;
  intValue: number | null;
  intRepr: string;
}

export interface AssetNodeDefinitionFragment_metadataEntries_PipelineRunMetadataEntry {
  __typename: "PipelineRunMetadataEntry";
  label: string;
  description: string | null;
  runId: string;
}

export interface AssetNodeDefinitionFragment_metadataEntries_AssetMetadataEntry_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetNodeDefinitionFragment_metadataEntries_AssetMetadataEntry {
  __typename: "AssetMetadataEntry";
  label: string;
  description: string | null;
  assetKey: AssetNodeDefinitionFragment_metadataEntries_AssetMetadataEntry_assetKey;
}

export interface AssetNodeDefinitionFragment_metadataEntries_TableMetadataEntry_table_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetNodeDefinitionFragment_metadataEntries_TableMetadataEntry_table_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetNodeDefinitionFragment_metadataEntries_TableMetadataEntry_table_schema_columns_constraints;
}

export interface AssetNodeDefinitionFragment_metadataEntries_TableMetadataEntry_table_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetNodeDefinitionFragment_metadataEntries_TableMetadataEntry_table_schema {
  __typename: "TableSchema";
  columns: AssetNodeDefinitionFragment_metadataEntries_TableMetadataEntry_table_schema_columns[];
  constraints: AssetNodeDefinitionFragment_metadataEntries_TableMetadataEntry_table_schema_constraints | null;
}

export interface AssetNodeDefinitionFragment_metadataEntries_TableMetadataEntry_table {
  __typename: "Table";
  records: string[];
  schema: AssetNodeDefinitionFragment_metadataEntries_TableMetadataEntry_table_schema;
}

export interface AssetNodeDefinitionFragment_metadataEntries_TableMetadataEntry {
  __typename: "TableMetadataEntry";
  label: string;
  description: string | null;
  table: AssetNodeDefinitionFragment_metadataEntries_TableMetadataEntry_table;
}

export interface AssetNodeDefinitionFragment_metadataEntries_TableSchemaMetadataEntry_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetNodeDefinitionFragment_metadataEntries_TableSchemaMetadataEntry_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetNodeDefinitionFragment_metadataEntries_TableSchemaMetadataEntry_schema_columns_constraints;
}

export interface AssetNodeDefinitionFragment_metadataEntries_TableSchemaMetadataEntry_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetNodeDefinitionFragment_metadataEntries_TableSchemaMetadataEntry_schema {
  __typename: "TableSchema";
  columns: AssetNodeDefinitionFragment_metadataEntries_TableSchemaMetadataEntry_schema_columns[];
  constraints: AssetNodeDefinitionFragment_metadataEntries_TableSchemaMetadataEntry_schema_constraints | null;
}

export interface AssetNodeDefinitionFragment_metadataEntries_TableSchemaMetadataEntry {
  __typename: "TableSchemaMetadataEntry";
  label: string;
  description: string | null;
  schema: AssetNodeDefinitionFragment_metadataEntries_TableSchemaMetadataEntry_schema;
}

export type AssetNodeDefinitionFragment_metadataEntries = AssetNodeDefinitionFragment_metadataEntries_PathMetadataEntry | AssetNodeDefinitionFragment_metadataEntries_JsonMetadataEntry | AssetNodeDefinitionFragment_metadataEntries_UrlMetadataEntry | AssetNodeDefinitionFragment_metadataEntries_TextMetadataEntry | AssetNodeDefinitionFragment_metadataEntries_MarkdownMetadataEntry | AssetNodeDefinitionFragment_metadataEntries_PythonArtifactMetadataEntry | AssetNodeDefinitionFragment_metadataEntries_FloatMetadataEntry | AssetNodeDefinitionFragment_metadataEntries_IntMetadataEntry | AssetNodeDefinitionFragment_metadataEntries_PipelineRunMetadataEntry | AssetNodeDefinitionFragment_metadataEntries_AssetMetadataEntry | AssetNodeDefinitionFragment_metadataEntries_TableMetadataEntry | AssetNodeDefinitionFragment_metadataEntries_TableSchemaMetadataEntry;

export interface AssetNodeDefinitionFragment_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetNodeDefinitionFragment_assetMaterializations_runOrError_RunNotFoundError {
  __typename: "RunNotFoundError" | "PythonError";
}

export interface AssetNodeDefinitionFragment_assetMaterializations_runOrError_Run_repositoryOrigin {
  __typename: "RepositoryOrigin";
  id: string;
  repositoryName: string;
  repositoryLocationName: string;
}

export interface AssetNodeDefinitionFragment_assetMaterializations_runOrError_Run {
  __typename: "Run";
  id: string;
  runId: string;
  mode: string;
  pipelineName: string;
  pipelineSnapshotId: string | null;
  repositoryOrigin: AssetNodeDefinitionFragment_assetMaterializations_runOrError_Run_repositoryOrigin | null;
}

export type AssetNodeDefinitionFragment_assetMaterializations_runOrError = AssetNodeDefinitionFragment_assetMaterializations_runOrError_RunNotFoundError | AssetNodeDefinitionFragment_assetMaterializations_runOrError_Run;

export interface AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_PathMetadataEntry {
  __typename: "PathMetadataEntry";
  label: string;
  description: string | null;
  path: string;
}

export interface AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_JsonMetadataEntry {
  __typename: "JsonMetadataEntry";
  label: string;
  description: string | null;
  jsonString: string;
}

export interface AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_UrlMetadataEntry {
  __typename: "UrlMetadataEntry";
  label: string;
  description: string | null;
  url: string;
}

export interface AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_TextMetadataEntry {
  __typename: "TextMetadataEntry";
  label: string;
  description: string | null;
  text: string;
}

export interface AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_MarkdownMetadataEntry {
  __typename: "MarkdownMetadataEntry";
  label: string;
  description: string | null;
  mdStr: string;
}

export interface AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_PythonArtifactMetadataEntry {
  __typename: "PythonArtifactMetadataEntry";
  label: string;
  description: string | null;
  module: string;
  name: string;
}

export interface AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_FloatMetadataEntry {
  __typename: "FloatMetadataEntry";
  label: string;
  description: string | null;
  floatValue: number | null;
}

export interface AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_IntMetadataEntry {
  __typename: "IntMetadataEntry";
  label: string;
  description: string | null;
  intValue: number | null;
  intRepr: string;
}

export interface AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_PipelineRunMetadataEntry {
  __typename: "PipelineRunMetadataEntry";
  label: string;
  description: string | null;
  runId: string;
}

export interface AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_AssetMetadataEntry_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_AssetMetadataEntry {
  __typename: "AssetMetadataEntry";
  label: string;
  description: string | null;
  assetKey: AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_AssetMetadataEntry_assetKey;
}

export interface AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_TableMetadataEntry_table_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_TableMetadataEntry_table_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_TableMetadataEntry_table_schema_columns_constraints;
}

export interface AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_TableMetadataEntry_table_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_TableMetadataEntry_table_schema {
  __typename: "TableSchema";
  columns: AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_TableMetadataEntry_table_schema_columns[];
  constraints: AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_TableMetadataEntry_table_schema_constraints | null;
}

export interface AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_TableMetadataEntry_table {
  __typename: "Table";
  records: string[];
  schema: AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_TableMetadataEntry_table_schema;
}

export interface AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_TableMetadataEntry {
  __typename: "TableMetadataEntry";
  label: string;
  description: string | null;
  table: AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_TableMetadataEntry_table;
}

export interface AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_TableSchemaMetadataEntry_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_TableSchemaMetadataEntry_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_TableSchemaMetadataEntry_schema_columns_constraints;
}

export interface AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_TableSchemaMetadataEntry_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_TableSchemaMetadataEntry_schema {
  __typename: "TableSchema";
  columns: AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_TableSchemaMetadataEntry_schema_columns[];
  constraints: AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_TableSchemaMetadataEntry_schema_constraints | null;
}

export interface AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_TableSchemaMetadataEntry {
  __typename: "TableSchemaMetadataEntry";
  label: string;
  description: string | null;
  schema: AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_TableSchemaMetadataEntry_schema;
}

export type AssetNodeDefinitionFragment_assetMaterializations_metadataEntries = AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_PathMetadataEntry | AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_JsonMetadataEntry | AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_UrlMetadataEntry | AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_TextMetadataEntry | AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_MarkdownMetadataEntry | AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_PythonArtifactMetadataEntry | AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_FloatMetadataEntry | AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_IntMetadataEntry | AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_PipelineRunMetadataEntry | AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_AssetMetadataEntry | AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_TableMetadataEntry | AssetNodeDefinitionFragment_assetMaterializations_metadataEntries_TableSchemaMetadataEntry;

export interface AssetNodeDefinitionFragment_assetMaterializations_assetLineage_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetNodeDefinitionFragment_assetMaterializations_assetLineage {
  __typename: "AssetLineageInfo";
  assetKey: AssetNodeDefinitionFragment_assetMaterializations_assetLineage_assetKey;
  partitions: string[];
}

export interface AssetNodeDefinitionFragment_assetMaterializations_stepStats {
  __typename: "RunStepStats";
  stepKey: string;
  startTime: number | null;
  endTime: number | null;
}

export interface AssetNodeDefinitionFragment_assetMaterializations {
  __typename: "MaterializationEvent";
  partition: string | null;
  runOrError: AssetNodeDefinitionFragment_assetMaterializations_runOrError;
  runId: string;
  timestamp: string;
  stepKey: string | null;
  metadataEntries: AssetNodeDefinitionFragment_assetMaterializations_metadataEntries[];
  assetLineage: AssetNodeDefinitionFragment_assetMaterializations_assetLineage[];
  stepStats: AssetNodeDefinitionFragment_assetMaterializations_stepStats;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_PathMetadataEntry {
  __typename: "PathMetadataEntry";
  label: string;
  description: string | null;
  path: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_JsonMetadataEntry {
  __typename: "JsonMetadataEntry";
  label: string;
  description: string | null;
  jsonString: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_UrlMetadataEntry {
  __typename: "UrlMetadataEntry";
  label: string;
  description: string | null;
  url: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_TextMetadataEntry {
  __typename: "TextMetadataEntry";
  label: string;
  description: string | null;
  text: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_MarkdownMetadataEntry {
  __typename: "MarkdownMetadataEntry";
  label: string;
  description: string | null;
  mdStr: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_PythonArtifactMetadataEntry {
  __typename: "PythonArtifactMetadataEntry";
  label: string;
  description: string | null;
  module: string;
  name: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_FloatMetadataEntry {
  __typename: "FloatMetadataEntry";
  label: string;
  description: string | null;
  floatValue: number | null;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_IntMetadataEntry {
  __typename: "IntMetadataEntry";
  label: string;
  description: string | null;
  intValue: number | null;
  intRepr: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_PipelineRunMetadataEntry {
  __typename: "PipelineRunMetadataEntry";
  label: string;
  description: string | null;
  runId: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_AssetMetadataEntry_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_AssetMetadataEntry {
  __typename: "AssetMetadataEntry";
  label: string;
  description: string | null;
  assetKey: AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_AssetMetadataEntry_assetKey;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_TableMetadataEntry_table_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_TableMetadataEntry_table_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_TableMetadataEntry_table_schema_columns_constraints;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_TableMetadataEntry_table_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_TableMetadataEntry_table_schema {
  __typename: "TableSchema";
  columns: AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_TableMetadataEntry_table_schema_columns[];
  constraints: AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_TableMetadataEntry_table_schema_constraints | null;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_TableMetadataEntry_table {
  __typename: "Table";
  records: string[];
  schema: AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_TableMetadataEntry_table_schema;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_TableMetadataEntry {
  __typename: "TableMetadataEntry";
  label: string;
  description: string | null;
  table: AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_TableMetadataEntry_table;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_TableSchemaMetadataEntry_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_TableSchemaMetadataEntry_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_TableSchemaMetadataEntry_schema_columns_constraints;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_TableSchemaMetadataEntry_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_TableSchemaMetadataEntry_schema {
  __typename: "TableSchema";
  columns: AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_TableSchemaMetadataEntry_schema_columns[];
  constraints: AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_TableSchemaMetadataEntry_schema_constraints | null;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_TableSchemaMetadataEntry {
  __typename: "TableSchemaMetadataEntry";
  label: string;
  description: string | null;
  schema: AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_TableSchemaMetadataEntry_schema;
}

export type AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries = AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_PathMetadataEntry | AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_JsonMetadataEntry | AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_UrlMetadataEntry | AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_TextMetadataEntry | AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_MarkdownMetadataEntry | AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_PythonArtifactMetadataEntry | AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_FloatMetadataEntry | AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_IntMetadataEntry | AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_PipelineRunMetadataEntry | AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_AssetMetadataEntry | AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_TableMetadataEntry | AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries_TableSchemaMetadataEntry;

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes = AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  recursiveConfigTypes: AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ArrayConfigType_recursiveConfigTypes[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes = AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_EnumConfigType_recursiveConfigTypes[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes = AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_RegularConfigType_recursiveConfigTypes[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes = AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_fields[];
  recursiveConfigTypes: AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_CompositeConfigType_recursiveConfigTypes[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes = AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
  recursiveConfigTypes: AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes = AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
  recursiveConfigTypes: AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_MapConfigType_recursiveConfigTypes[];
}

export type AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType = AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ArrayConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_EnumConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_RegularConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_CompositeConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_ScalarUnionConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType_MapConfigType;

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes = AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  recursiveConfigTypes: AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ArrayConfigType_recursiveConfigTypes[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes = AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_EnumConfigType_recursiveConfigTypes[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes = AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_RegularConfigType_recursiveConfigTypes[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes = AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_fields[];
  recursiveConfigTypes: AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_CompositeConfigType_recursiveConfigTypes[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes = AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
  recursiveConfigTypes: AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes = AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
  recursiveConfigTypes: AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_MapConfigType_recursiveConfigTypes[];
}

export type AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType = AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ArrayConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_EnumConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_RegularConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_CompositeConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_ScalarUnionConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType_MapConfigType;

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_PathMetadataEntry {
  __typename: "PathMetadataEntry";
  label: string;
  description: string | null;
  path: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_JsonMetadataEntry {
  __typename: "JsonMetadataEntry";
  label: string;
  description: string | null;
  jsonString: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_UrlMetadataEntry {
  __typename: "UrlMetadataEntry";
  label: string;
  description: string | null;
  url: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_TextMetadataEntry {
  __typename: "TextMetadataEntry";
  label: string;
  description: string | null;
  text: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_MarkdownMetadataEntry {
  __typename: "MarkdownMetadataEntry";
  label: string;
  description: string | null;
  mdStr: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_PythonArtifactMetadataEntry {
  __typename: "PythonArtifactMetadataEntry";
  label: string;
  description: string | null;
  module: string;
  name: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_FloatMetadataEntry {
  __typename: "FloatMetadataEntry";
  label: string;
  description: string | null;
  floatValue: number | null;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_IntMetadataEntry {
  __typename: "IntMetadataEntry";
  label: string;
  description: string | null;
  intValue: number | null;
  intRepr: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_PipelineRunMetadataEntry {
  __typename: "PipelineRunMetadataEntry";
  label: string;
  description: string | null;
  runId: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_AssetMetadataEntry_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_AssetMetadataEntry {
  __typename: "AssetMetadataEntry";
  label: string;
  description: string | null;
  assetKey: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_AssetMetadataEntry_assetKey;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_TableMetadataEntry_table_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_TableMetadataEntry_table_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_TableMetadataEntry_table_schema_columns_constraints;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_TableMetadataEntry_table_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_TableMetadataEntry_table_schema {
  __typename: "TableSchema";
  columns: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_TableMetadataEntry_table_schema_columns[];
  constraints: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_TableMetadataEntry_table_schema_constraints | null;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_TableMetadataEntry_table {
  __typename: "Table";
  records: string[];
  schema: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_TableMetadataEntry_table_schema;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_TableMetadataEntry {
  __typename: "TableMetadataEntry";
  label: string;
  description: string | null;
  table: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_TableMetadataEntry_table;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_TableSchemaMetadataEntry_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_TableSchemaMetadataEntry_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_TableSchemaMetadataEntry_schema_columns_constraints;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_TableSchemaMetadataEntry_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_TableSchemaMetadataEntry_schema {
  __typename: "TableSchema";
  columns: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_TableSchemaMetadataEntry_schema_columns[];
  constraints: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_TableSchemaMetadataEntry_schema_constraints | null;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_TableSchemaMetadataEntry {
  __typename: "TableSchemaMetadataEntry";
  label: string;
  description: string | null;
  schema: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_TableSchemaMetadataEntry_schema;
}

export type AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries = AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_PathMetadataEntry | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_JsonMetadataEntry | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_UrlMetadataEntry | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_TextMetadataEntry | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_MarkdownMetadataEntry | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_PythonArtifactMetadataEntry | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_FloatMetadataEntry | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_IntMetadataEntry | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_PipelineRunMetadataEntry | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_AssetMetadataEntry | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_TableMetadataEntry | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries_TableSchemaMetadataEntry;

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes = AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  recursiveConfigTypes: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType_recursiveConfigTypes[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes = AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType_recursiveConfigTypes[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes = AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType_recursiveConfigTypes[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes = AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_fields[];
  recursiveConfigTypes: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType_recursiveConfigTypes[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes = AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
  recursiveConfigTypes: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType_recursiveConfigTypes[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes = AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
  recursiveConfigTypes: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType_recursiveConfigTypes[];
}

export type AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType = AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ArrayConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_EnumConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_RegularConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_CompositeConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_ScalarUnionConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType_MapConfigType;

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes = AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ArrayConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_EnumConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_RegularConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_CompositeConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  recursiveConfigTypes: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType_recursiveConfigTypes[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes = AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_ArrayConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_EnumConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_RegularConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_CompositeConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType_recursiveConfigTypes[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes = AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_ArrayConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_EnumConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_RegularConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_CompositeConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
  recursiveConfigTypes: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType_recursiveConfigTypes[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes = AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ArrayConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_EnumConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_RegularConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_CompositeConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_fields[];
  recursiveConfigTypes: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType_recursiveConfigTypes[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes = AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ArrayConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_EnumConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_RegularConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_CompositeConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
  recursiveConfigTypes: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType_recursiveConfigTypes[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType {
  __typename: "ArrayConfigType" | "NullableConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType {
  __typename: "EnumConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType {
  __typename: "RegularConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  givenName: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields {
  __typename: "ConfigTypeField";
  name: string;
  description: string | null;
  isRequired: boolean;
  configTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType {
  __typename: "CompositeConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  fields: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType_fields[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType {
  __typename: "ScalarUnionConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  scalarTypeKey: string;
  nonScalarTypeKey: string;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
}

export type AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes = AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_ArrayConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_EnumConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_RegularConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_CompositeConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_ScalarUnionConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes_MapConfigType;

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType {
  __typename: "MapConfigType";
  key: string;
  description: string | null;
  isSelector: boolean;
  typeParamKeys: string[];
  keyLabelName: string | null;
  recursiveConfigTypes: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType_recursiveConfigTypes[];
}

export type AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType = AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ArrayConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_EnumConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_RegularConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_CompositeConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_ScalarUnionConfigType | AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType_MapConfigType;

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes {
  __typename: "RegularDagsterType" | "ListDagsterType" | "NullableDagsterType";
  key: string;
  name: string | null;
  displayName: string;
  description: string | null;
  isNullable: boolean;
  isList: boolean;
  isBuiltin: boolean;
  isNothing: boolean;
  metadataEntries: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_metadataEntries[];
  inputSchemaType: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_inputSchemaType | null;
  outputSchemaType: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes_outputSchemaType | null;
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions_type {
  __typename: "RegularDagsterType" | "ListDagsterType" | "NullableDagsterType";
  key: string;
  name: string | null;
  displayName: string;
  description: string | null;
  isNullable: boolean;
  isList: boolean;
  isBuiltin: boolean;
  isNothing: boolean;
  metadataEntries: AssetNodeDefinitionFragment_op_outputDefinitions_type_metadataEntries[];
  inputSchemaType: AssetNodeDefinitionFragment_op_outputDefinitions_type_inputSchemaType | null;
  outputSchemaType: AssetNodeDefinitionFragment_op_outputDefinitions_type_outputSchemaType | null;
  innerTypes: AssetNodeDefinitionFragment_op_outputDefinitions_type_innerTypes[];
}

export interface AssetNodeDefinitionFragment_op_outputDefinitions {
  __typename: "OutputDefinition";
  type: AssetNodeDefinitionFragment_op_outputDefinitions_type;
}

export interface AssetNodeDefinitionFragment_op {
  __typename: "SolidDefinition";
  outputDefinitions: AssetNodeDefinitionFragment_op_outputDefinitions[];
}

export interface AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_PathMetadataEntry {
  __typename: "PathMetadataEntry";
  label: string;
  description: string | null;
  path: string;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_JsonMetadataEntry {
  __typename: "JsonMetadataEntry";
  label: string;
  description: string | null;
  jsonString: string;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_UrlMetadataEntry {
  __typename: "UrlMetadataEntry";
  label: string;
  description: string | null;
  url: string;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_TextMetadataEntry {
  __typename: "TextMetadataEntry";
  label: string;
  description: string | null;
  text: string;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_MarkdownMetadataEntry {
  __typename: "MarkdownMetadataEntry";
  label: string;
  description: string | null;
  mdStr: string;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_PythonArtifactMetadataEntry {
  __typename: "PythonArtifactMetadataEntry";
  label: string;
  description: string | null;
  module: string;
  name: string;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_FloatMetadataEntry {
  __typename: "FloatMetadataEntry";
  label: string;
  description: string | null;
  floatValue: number | null;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_IntMetadataEntry {
  __typename: "IntMetadataEntry";
  label: string;
  description: string | null;
  intValue: number | null;
  intRepr: string;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_PipelineRunMetadataEntry {
  __typename: "PipelineRunMetadataEntry";
  label: string;
  description: string | null;
  runId: string;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_AssetMetadataEntry_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_AssetMetadataEntry {
  __typename: "AssetMetadataEntry";
  label: string;
  description: string | null;
  assetKey: AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_AssetMetadataEntry_assetKey;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_TableMetadataEntry_table_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_TableMetadataEntry_table_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_TableMetadataEntry_table_schema_columns_constraints;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_TableMetadataEntry_table_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_TableMetadataEntry_table_schema {
  __typename: "TableSchema";
  columns: AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_TableMetadataEntry_table_schema_columns[];
  constraints: AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_TableMetadataEntry_table_schema_constraints | null;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_TableMetadataEntry_table {
  __typename: "Table";
  records: string[];
  schema: AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_TableMetadataEntry_table_schema;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_TableMetadataEntry {
  __typename: "TableMetadataEntry";
  label: string;
  description: string | null;
  table: AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_TableMetadataEntry_table;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_TableSchemaMetadataEntry_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_TableSchemaMetadataEntry_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_TableSchemaMetadataEntry_schema_columns_constraints;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_TableSchemaMetadataEntry_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_TableSchemaMetadataEntry_schema {
  __typename: "TableSchema";
  columns: AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_TableSchemaMetadataEntry_schema_columns[];
  constraints: AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_TableSchemaMetadataEntry_schema_constraints | null;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_TableSchemaMetadataEntry {
  __typename: "TableSchemaMetadataEntry";
  label: string;
  description: string | null;
  schema: AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_TableSchemaMetadataEntry_schema;
}

export type AssetNodeDefinitionFragment_dependencies_asset_metadataEntries = AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_PathMetadataEntry | AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_JsonMetadataEntry | AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_UrlMetadataEntry | AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_TextMetadataEntry | AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_MarkdownMetadataEntry | AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_PythonArtifactMetadataEntry | AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_FloatMetadataEntry | AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_IntMetadataEntry | AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_PipelineRunMetadataEntry | AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_AssetMetadataEntry | AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_TableMetadataEntry | AssetNodeDefinitionFragment_dependencies_asset_metadataEntries_TableSchemaMetadataEntry;

export interface AssetNodeDefinitionFragment_dependencies_asset_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetNodeDefinitionFragment_dependencies_asset_repository_location {
  __typename: "RepositoryLocation";
  id: string;
  name: string;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_repository {
  __typename: "Repository";
  id: string;
  name: string;
  location: AssetNodeDefinitionFragment_dependencies_asset_repository_location;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_runOrError_RunNotFoundError {
  __typename: "RunNotFoundError" | "PythonError";
}

export interface AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_runOrError_Run_repositoryOrigin {
  __typename: "RepositoryOrigin";
  id: string;
  repositoryName: string;
  repositoryLocationName: string;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_runOrError_Run {
  __typename: "Run";
  id: string;
  runId: string;
  mode: string;
  pipelineName: string;
  pipelineSnapshotId: string | null;
  repositoryOrigin: AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_runOrError_Run_repositoryOrigin | null;
}

export type AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_runOrError = AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_runOrError_RunNotFoundError | AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_runOrError_Run;

export interface AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_PathMetadataEntry {
  __typename: "PathMetadataEntry";
  label: string;
  description: string | null;
  path: string;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_JsonMetadataEntry {
  __typename: "JsonMetadataEntry";
  label: string;
  description: string | null;
  jsonString: string;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_UrlMetadataEntry {
  __typename: "UrlMetadataEntry";
  label: string;
  description: string | null;
  url: string;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_TextMetadataEntry {
  __typename: "TextMetadataEntry";
  label: string;
  description: string | null;
  text: string;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_MarkdownMetadataEntry {
  __typename: "MarkdownMetadataEntry";
  label: string;
  description: string | null;
  mdStr: string;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_PythonArtifactMetadataEntry {
  __typename: "PythonArtifactMetadataEntry";
  label: string;
  description: string | null;
  module: string;
  name: string;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_FloatMetadataEntry {
  __typename: "FloatMetadataEntry";
  label: string;
  description: string | null;
  floatValue: number | null;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_IntMetadataEntry {
  __typename: "IntMetadataEntry";
  label: string;
  description: string | null;
  intValue: number | null;
  intRepr: string;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_PipelineRunMetadataEntry {
  __typename: "PipelineRunMetadataEntry";
  label: string;
  description: string | null;
  runId: string;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_AssetMetadataEntry_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_AssetMetadataEntry {
  __typename: "AssetMetadataEntry";
  label: string;
  description: string | null;
  assetKey: AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_AssetMetadataEntry_assetKey;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_TableMetadataEntry_table_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_TableMetadataEntry_table_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_TableMetadataEntry_table_schema_columns_constraints;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_TableMetadataEntry_table_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_TableMetadataEntry_table_schema {
  __typename: "TableSchema";
  columns: AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_TableMetadataEntry_table_schema_columns[];
  constraints: AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_TableMetadataEntry_table_schema_constraints | null;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_TableMetadataEntry_table {
  __typename: "Table";
  records: string[];
  schema: AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_TableMetadataEntry_table_schema;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_TableMetadataEntry {
  __typename: "TableMetadataEntry";
  label: string;
  description: string | null;
  table: AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_TableMetadataEntry_table;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_TableSchemaMetadataEntry_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_TableSchemaMetadataEntry_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_TableSchemaMetadataEntry_schema_columns_constraints;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_TableSchemaMetadataEntry_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_TableSchemaMetadataEntry_schema {
  __typename: "TableSchema";
  columns: AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_TableSchemaMetadataEntry_schema_columns[];
  constraints: AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_TableSchemaMetadataEntry_schema_constraints | null;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_TableSchemaMetadataEntry {
  __typename: "TableSchemaMetadataEntry";
  label: string;
  description: string | null;
  schema: AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_TableSchemaMetadataEntry_schema;
}

export type AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries = AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_PathMetadataEntry | AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_JsonMetadataEntry | AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_UrlMetadataEntry | AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_TextMetadataEntry | AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_MarkdownMetadataEntry | AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_PythonArtifactMetadataEntry | AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_FloatMetadataEntry | AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_IntMetadataEntry | AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_PipelineRunMetadataEntry | AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_AssetMetadataEntry | AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_TableMetadataEntry | AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries_TableSchemaMetadataEntry;

export interface AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_assetLineage_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_assetLineage {
  __typename: "AssetLineageInfo";
  assetKey: AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_assetLineage_assetKey;
  partitions: string[];
}

export interface AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_stepStats {
  __typename: "RunStepStats";
  stepKey: string;
  startTime: number | null;
  endTime: number | null;
}

export interface AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations {
  __typename: "MaterializationEvent";
  partition: string | null;
  runOrError: AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_runOrError;
  runId: string;
  timestamp: string;
  stepKey: string | null;
  metadataEntries: AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_metadataEntries[];
  assetLineage: AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_assetLineage[];
  stepStats: AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations_stepStats;
}

export interface AssetNodeDefinitionFragment_dependencies_asset {
  __typename: "AssetNode";
  id: string;
  opName: string | null;
  jobNames: string[];
  description: string | null;
  metadataEntries: AssetNodeDefinitionFragment_dependencies_asset_metadataEntries[];
  partitionDefinition: string | null;
  assetKey: AssetNodeDefinitionFragment_dependencies_asset_assetKey;
  repository: AssetNodeDefinitionFragment_dependencies_asset_repository;
  assetMaterializations: AssetNodeDefinitionFragment_dependencies_asset_assetMaterializations[];
}

export interface AssetNodeDefinitionFragment_dependencies {
  __typename: "AssetDependency";
  asset: AssetNodeDefinitionFragment_dependencies_asset;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_PathMetadataEntry {
  __typename: "PathMetadataEntry";
  label: string;
  description: string | null;
  path: string;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_JsonMetadataEntry {
  __typename: "JsonMetadataEntry";
  label: string;
  description: string | null;
  jsonString: string;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_UrlMetadataEntry {
  __typename: "UrlMetadataEntry";
  label: string;
  description: string | null;
  url: string;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_TextMetadataEntry {
  __typename: "TextMetadataEntry";
  label: string;
  description: string | null;
  text: string;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_MarkdownMetadataEntry {
  __typename: "MarkdownMetadataEntry";
  label: string;
  description: string | null;
  mdStr: string;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_PythonArtifactMetadataEntry {
  __typename: "PythonArtifactMetadataEntry";
  label: string;
  description: string | null;
  module: string;
  name: string;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_FloatMetadataEntry {
  __typename: "FloatMetadataEntry";
  label: string;
  description: string | null;
  floatValue: number | null;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_IntMetadataEntry {
  __typename: "IntMetadataEntry";
  label: string;
  description: string | null;
  intValue: number | null;
  intRepr: string;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_PipelineRunMetadataEntry {
  __typename: "PipelineRunMetadataEntry";
  label: string;
  description: string | null;
  runId: string;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_AssetMetadataEntry_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_AssetMetadataEntry {
  __typename: "AssetMetadataEntry";
  label: string;
  description: string | null;
  assetKey: AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_AssetMetadataEntry_assetKey;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_TableMetadataEntry_table_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_TableMetadataEntry_table_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_TableMetadataEntry_table_schema_columns_constraints;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_TableMetadataEntry_table_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_TableMetadataEntry_table_schema {
  __typename: "TableSchema";
  columns: AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_TableMetadataEntry_table_schema_columns[];
  constraints: AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_TableMetadataEntry_table_schema_constraints | null;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_TableMetadataEntry_table {
  __typename: "Table";
  records: string[];
  schema: AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_TableMetadataEntry_table_schema;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_TableMetadataEntry {
  __typename: "TableMetadataEntry";
  label: string;
  description: string | null;
  table: AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_TableMetadataEntry_table;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_TableSchemaMetadataEntry_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_TableSchemaMetadataEntry_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_TableSchemaMetadataEntry_schema_columns_constraints;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_TableSchemaMetadataEntry_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_TableSchemaMetadataEntry_schema {
  __typename: "TableSchema";
  columns: AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_TableSchemaMetadataEntry_schema_columns[];
  constraints: AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_TableSchemaMetadataEntry_schema_constraints | null;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_TableSchemaMetadataEntry {
  __typename: "TableSchemaMetadataEntry";
  label: string;
  description: string | null;
  schema: AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_TableSchemaMetadataEntry_schema;
}

export type AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries = AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_PathMetadataEntry | AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_JsonMetadataEntry | AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_UrlMetadataEntry | AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_TextMetadataEntry | AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_MarkdownMetadataEntry | AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_PythonArtifactMetadataEntry | AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_FloatMetadataEntry | AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_IntMetadataEntry | AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_PipelineRunMetadataEntry | AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_AssetMetadataEntry | AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_TableMetadataEntry | AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries_TableSchemaMetadataEntry;

export interface AssetNodeDefinitionFragment_dependedBy_asset_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_repository_location {
  __typename: "RepositoryLocation";
  id: string;
  name: string;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_repository {
  __typename: "Repository";
  id: string;
  name: string;
  location: AssetNodeDefinitionFragment_dependedBy_asset_repository_location;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_runOrError_RunNotFoundError {
  __typename: "RunNotFoundError" | "PythonError";
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_runOrError_Run_repositoryOrigin {
  __typename: "RepositoryOrigin";
  id: string;
  repositoryName: string;
  repositoryLocationName: string;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_runOrError_Run {
  __typename: "Run";
  id: string;
  runId: string;
  mode: string;
  pipelineName: string;
  pipelineSnapshotId: string | null;
  repositoryOrigin: AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_runOrError_Run_repositoryOrigin | null;
}

export type AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_runOrError = AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_runOrError_RunNotFoundError | AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_runOrError_Run;

export interface AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_PathMetadataEntry {
  __typename: "PathMetadataEntry";
  label: string;
  description: string | null;
  path: string;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_JsonMetadataEntry {
  __typename: "JsonMetadataEntry";
  label: string;
  description: string | null;
  jsonString: string;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_UrlMetadataEntry {
  __typename: "UrlMetadataEntry";
  label: string;
  description: string | null;
  url: string;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_TextMetadataEntry {
  __typename: "TextMetadataEntry";
  label: string;
  description: string | null;
  text: string;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_MarkdownMetadataEntry {
  __typename: "MarkdownMetadataEntry";
  label: string;
  description: string | null;
  mdStr: string;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_PythonArtifactMetadataEntry {
  __typename: "PythonArtifactMetadataEntry";
  label: string;
  description: string | null;
  module: string;
  name: string;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_FloatMetadataEntry {
  __typename: "FloatMetadataEntry";
  label: string;
  description: string | null;
  floatValue: number | null;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_IntMetadataEntry {
  __typename: "IntMetadataEntry";
  label: string;
  description: string | null;
  intValue: number | null;
  intRepr: string;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_PipelineRunMetadataEntry {
  __typename: "PipelineRunMetadataEntry";
  label: string;
  description: string | null;
  runId: string;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_AssetMetadataEntry_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_AssetMetadataEntry {
  __typename: "AssetMetadataEntry";
  label: string;
  description: string | null;
  assetKey: AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_AssetMetadataEntry_assetKey;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_TableMetadataEntry_table_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_TableMetadataEntry_table_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_TableMetadataEntry_table_schema_columns_constraints;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_TableMetadataEntry_table_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_TableMetadataEntry_table_schema {
  __typename: "TableSchema";
  columns: AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_TableMetadataEntry_table_schema_columns[];
  constraints: AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_TableMetadataEntry_table_schema_constraints | null;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_TableMetadataEntry_table {
  __typename: "Table";
  records: string[];
  schema: AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_TableMetadataEntry_table_schema;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_TableMetadataEntry {
  __typename: "TableMetadataEntry";
  label: string;
  description: string | null;
  table: AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_TableMetadataEntry_table;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_TableSchemaMetadataEntry_schema_columns_constraints {
  __typename: "TableColumnConstraints";
  nullable: boolean;
  unique: boolean;
  other: string[];
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_TableSchemaMetadataEntry_schema_columns {
  __typename: "TableColumn";
  name: string;
  description: string | null;
  type: string;
  constraints: AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_TableSchemaMetadataEntry_schema_columns_constraints;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_TableSchemaMetadataEntry_schema_constraints {
  __typename: "TableConstraints";
  other: string[];
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_TableSchemaMetadataEntry_schema {
  __typename: "TableSchema";
  columns: AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_TableSchemaMetadataEntry_schema_columns[];
  constraints: AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_TableSchemaMetadataEntry_schema_constraints | null;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_TableSchemaMetadataEntry {
  __typename: "TableSchemaMetadataEntry";
  label: string;
  description: string | null;
  schema: AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_TableSchemaMetadataEntry_schema;
}

export type AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries = AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_PathMetadataEntry | AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_JsonMetadataEntry | AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_UrlMetadataEntry | AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_TextMetadataEntry | AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_MarkdownMetadataEntry | AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_PythonArtifactMetadataEntry | AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_FloatMetadataEntry | AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_IntMetadataEntry | AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_PipelineRunMetadataEntry | AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_AssetMetadataEntry | AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_TableMetadataEntry | AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries_TableSchemaMetadataEntry;

export interface AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_assetLineage_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_assetLineage {
  __typename: "AssetLineageInfo";
  assetKey: AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_assetLineage_assetKey;
  partitions: string[];
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_stepStats {
  __typename: "RunStepStats";
  stepKey: string;
  startTime: number | null;
  endTime: number | null;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations {
  __typename: "MaterializationEvent";
  partition: string | null;
  runOrError: AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_runOrError;
  runId: string;
  timestamp: string;
  stepKey: string | null;
  metadataEntries: AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_metadataEntries[];
  assetLineage: AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_assetLineage[];
  stepStats: AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations_stepStats;
}

export interface AssetNodeDefinitionFragment_dependedBy_asset {
  __typename: "AssetNode";
  id: string;
  opName: string | null;
  jobNames: string[];
  description: string | null;
  metadataEntries: AssetNodeDefinitionFragment_dependedBy_asset_metadataEntries[];
  partitionDefinition: string | null;
  assetKey: AssetNodeDefinitionFragment_dependedBy_asset_assetKey;
  repository: AssetNodeDefinitionFragment_dependedBy_asset_repository;
  assetMaterializations: AssetNodeDefinitionFragment_dependedBy_asset_assetMaterializations[];
}

export interface AssetNodeDefinitionFragment_dependedBy {
  __typename: "AssetDependency";
  asset: AssetNodeDefinitionFragment_dependedBy_asset;
}

export interface AssetNodeDefinitionFragment {
  __typename: "AssetNode";
  id: string;
  description: string | null;
  opName: string | null;
  jobNames: string[];
  repository: AssetNodeDefinitionFragment_repository;
  metadataEntries: AssetNodeDefinitionFragment_metadataEntries[];
  partitionDefinition: string | null;
  assetKey: AssetNodeDefinitionFragment_assetKey;
  assetMaterializations: AssetNodeDefinitionFragment_assetMaterializations[];
  op: AssetNodeDefinitionFragment_op | null;
  dependencies: AssetNodeDefinitionFragment_dependencies[];
  dependedBy: AssetNodeDefinitionFragment_dependedBy[];
}
