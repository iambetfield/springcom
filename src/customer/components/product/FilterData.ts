export const color = [
    "White",
    "Black",
    "Red",
    "Brown",
    "Green",
    "Yellow"
];

export const filters = [
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White', checked: false },
        { value: 'beige', label: 'Beige', checked: false },
        { value: 'blue', label: 'Blue', checked: false },
        { value: 'brown', label: 'Brown', checked: false },
        { value: 'green', label: 'Green', checked: false },
        { value: 'purple', label: 'Purple', checked: false },
        { value: 'yellow', label: 'Yellow', checked: false },
      ],
    },
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'new-arrivals', label: 'New Arrivals', checked: false },
        { value: 'sale', label: 'Sale', checked: false },
        { value: 'travel', label: 'Travel', checked: false },
        { value: 'organization', label: 'Organization', checked: false },
        { value: 'accessories', label: 'Accessories', checked: false },
      ],
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: 'XS', label: 'XS', checked: false },
        { value: 'X', label: 'X', checked: false },
        { value: 'M', label: 'M', checked: false },
        { value: 'L', label: 'L', checked: false },
        { value: 'XL', label: 'XL', checked: false },
        { value: 'XXL', label: 'XXL', checked: false},
      ],
    },
  ];

  export const singleFilter = [
    {
        id:"price",
        name: "Price",
        options: [
            {value:"100-999", label:"$100 to $999"},
            {value:"1000-4999", label:"$1000 to $4999"},
            {value:"5000-9999", label:"$5000 to $9999"},
            {value:"10000-100000", label:"$10000 to $100000"},
        ],
    },
    {
        id: "discount",
        name: "Discount Range",
        options: [
            {value: "10", label: "hasta 10%"},
            {value: "20", label: "hasta 20%"},
            {value: "30", label: "hasta 30%"},
            {value: "40", label: "hasta 40%"},
            {value: "50", label: "hasta 50%"},
        ]
    }
  ]