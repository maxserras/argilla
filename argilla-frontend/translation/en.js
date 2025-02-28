export default {
  multi_label_selection: "Multi-label",
  ranking: "Ranking",
  label_selection: "Label",
  span: "Span",
  text: "Text",
  rating: "Rating",
  minimize: "Minimize",
  select: "Select",
  search: "Search",
  searchPlaceholder: "Introduce a query",
  searchDatasets: "Search datasets",
  expand: "Expand",
  copied: "Copied",
  copyClipboard: "Copy to clipboard",
  copyLink: "Copy link",
  copyRecord: "Copy record",
  refresh: "Refresh",
  typeYourText: "Type your text",
  all: "All",
  value: "Value",
  title: "Title",
  description: "Description",
  labels: "Labels",
  order: "Order",
  useMarkdown: "Use Markdown",
  suggestionFirst: "Show suggestions first",
  visibleForAnnotators: "Visible for annotators",
  recordInfo: "Record info",
  viewMetadata: "View metadata",
  allowExtraMetadata: "Allow extra metadata",
  extraMetadata: "Extra metadata",
  dimension: "Dimension",
  visibleLabels: "Visible labels",
  annotationGuidelines: "Annotation guidelines",
  guidelines: "Guidelines",
  taskDistribution: "Task distribution",
  minimumSubmittedResponses: "Minimum submitted responses",
  taskDistributionTooltip:
    "A task is complete when all records have the \nminimum number of submitted responses",
  noAnnotationGuidelines: "This dataset has no annotation guidelines",
  breadcrumbs: {
    home: "Home",
    datasetSettings: "settings",
    userSettings: "my settings",
  },
  datasets: {
    left: "left",
    completed: "Completed",
    pending: "Pending",
  },
  recordStatus: {
    pending: "Pending",
    draft: "Draft",
    discarded: "Discarded",
    submitted: "Submitted",
    validated: "Validated",
    completedTooltip:
      "The record is complete, it has the \nminimum number of responses",
  },
  userSettings: {
    title: "My settings",
    fields: {
      userName: "Username",
      firstName: "Name",
      lastName: "Surname",
      workspaces: "Workspaces",
    },
    apiKey: "API key",
    apiKeyDescription:
      "API key tokens allow you to manage datasets using the Python SDK.",
    copyKey: "Copy key",
  },
  userAvatarTooltip: {
    settings: "My settings",
    docs: "View docs",
    logout: "Log out",
  },
  settings: {
    title: "Dataset settings",
    datasetInfo: "Dataset info",
    seeYourDataset: "See your dataset",
    editFields: "Edit fields",
    editQuestions: "Edit questions",
    editMetadata: "Edit metadata properties",
    editVectors: "Edit vectors",
    deleteDataset: "Delete dataset",
    deleteWarning: "Be careful, this action is not reversible",
    deleteConfirmation: "Delete confirmation",
    deleteConfirmationMessage:
      "You are about to delete: <strong>{datasetName}</strong> from workspace <strong>{workspaceName}</strong>. This action cannot be undone",
    yesDelete: "Yes, delete",
    write: "Write",
    preview: "Preview",
  },
  button: {
    ignore_and_continue: "Ignore and continue",
    login: "Sign in",
    "hf-login": "Sign in with Hugging Face",
    sign_in_with_username: "Sign in with username",
    cancel: "Cancel",
    continue: "Continue",
    delete: "Delete",
  },
  to_submit_complete_required: "To submit complete \nrequired responses",
  some_records_failed_to_annotate: "Some records failed to annotate",
  changes_no_submit: "You didn't submit your changes",
  bulkAnnotation: {
    recordsSelected: "1 record selected | {count} records selected",
    recordsViewSettings: "Record size",
    fixedHeight: "Collapse records",
    defaultHeight: "Expand records",
    to_annotate_record_bulk_required: "No record selected",
    select_to_annotate: "Select all",
    pageSize: "Page size",
    selectAllResults: "Select all {total} matched records",
    haveSelectedRecords: "You have selected all {total} records",
    actionConfirmation: "Bulk action confirmation",
    actionConfirmationText:
      "This action will affect {total} records, do you want to continue? ",
    allRecordsAnnotated: "The {total} records have been {action}",
    affectedAll: {
      submitted: "submitted",
      discarded: "discarded",
      draft: "saved as draft",
    },
  },
  shortcuts: {
    label: "Shortcuts",
    pagination: {
      go_to_previous_record: "Previous (←)",
      go_to_next_record: "Next (→)",
    },
  },
  questions_form: {
    validate: "Validate",
    clear: "Clear",
    reset: "Reset",
    discard: "Discard",
    submit: "Submit",
    draft: "Save as draft",
    write: "Write",
  },
  sorting: {
    addOtherField: "+ Add another field",
    suggestion: {
      score: "Suggestion score",
      value: "Suggestion value",
    },
    response: "Response value",
    record: "general",
    metadata: "metadata",
  },
  suggestion: {
    agent: "\nagent: {agent}",
    score: "\nscore: {score}",
    tooltip: "This question contains a suggestion{agent}{score}",
    filter: {
      value: "Suggestion values",
      score: "Score",
      agent: "Agent",
    },
    plural: "Suggestions",
    name: `Suggestion`,
  },
  similarity: {
    "record-number": "Record number",
    findSimilar: "Find similar",
    similarTo: "Similar to",
    similarityScore: "Similarity Score",
    similarUsing: "similar using",
    expand: "Expand",
    collapse: "Collapse",
  },
  spanAnnotation: {
    shortcutHelper: "Hold 'Shift' to select character level",
    notSupported: "Span annotation is not supported for your browser",
  },
  login: {
    title: "Sign in",
    username: "Username",
    usernameDescription: "Enter your username",
    password: "Password",
    show: "Show",
    hide: "Hide",
    passwordDescription: "Enter your password",
    claim: "Work on data together.</br>Make your models better.",
    hf: {
      title: "Welcome to {space}",
      subtitle: "Join <strong>{user}</strong> to build better datasets for AI",
    },
  },
  status: "Status",
  filters: "Filters",
  filterBy: "Filter by...",
  fields: "Fields",
  questions: "Questions",
  metadata: "Metadata",
  vectors: "Vectors",
  dangerZone: "Danger zone",
  responses: "Responses",
  "reset-all": "Reset all",
  reset: "Reset",
  less: "Less",
  learnMore: "Learn more",
  with: "with",
  find: "Find",
  cancel: "Cancel",
  focus_mode: "Focus view",
  bulk_mode: "Bulk view",
  update: "Update",
  youAreOnlineAgain: "You are online again",
  youAreOffline: "You are offline",
  datasetTable: {
    name: "Dataset",
    workspace: "Workspace",
    createdAt: "Created",
    lastActivityAt: "Updated",
    progress: "Team progress",
  },
  metrics: {
    total: "Total",
    progress: {
      my: "My Progress",
      team: "Team progress",
    },
  },
  persistentStorage: {
    adminOrOwner:
      "Persistent storage is not enabled. All data will be lost if this space restarts. Go to the space settings to enable it.",
    annotator:
      "Persistent storage is not enabled. All data will be lost if this space restarts.",
  },
  validations: {
    businessLogic: {
      missing_vector: {
        message: "Vector not found for the selected record",
      },
      update_distribution_with_existing_responses: {
        message:
          "Distribution settings can't be modified for a dataset containing user responses",
      },
    },
    http: {
      401: {
        message: "Could not validate credentials",
      },
      404: {
        message: "Could not find the requested resource",
      },
      429: {
        message: "Please wait a few seconds before trying again",
      },
      500: {
        message: "An error occurred, please try again later",
      },
    },
  },
};
