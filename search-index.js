var searchIndex = {};
searchIndex['pcapng'] = {"items":[[0,"","pcapng","",null,null],[0,"block","","",null,null],[3,"RawBlock","pcapng::block","Public representation of a parsed block",null,null],[12,"block_length","","",0,null],[12,"body","","",0,null],[12,"check_length","","",0,null],[4,"Block","","",null,null],[13,"SectionHeader","","",1,null],[13,"EnhancedPacket","","",1,null],[13,"InterfaceDescription","","",1,null],[5,"parse_block","","",null,null],[5,"parse_blocks","","",null,null],[11,"fmt","","",1,{"inputs":[{"name":"block"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"rawblock"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"parse","","",0,{"inputs":[{"name":"rawblock"}],"output":{"name":"block"}}]],"paths":[[3,"RawBlock"],[4,"Block"]]};
searchIndex['nom'] = {"items":[[0,"","nom","Nom, eating data byte by byte",null,null],[3,"FileProducer","","Can produce data from a file",null,null],[3,"MemProducer","","Can parse data from an already in memory byte array",null,null],[4,"ErrorCode","","",null,null],[13,"Tag","","",0,null],[13,"MapRes","","",0,null],[13,"MapOpt","","",0,null],[13,"Alt","","",0,null],[13,"IsNot","","",0,null],[13,"IsA","","",0,null],[13,"Filter","","",0,null],[13,"SeparatedList","","",0,null],[13,"SeparatedNonEmptyList","","",0,null],[13,"Many1","","",0,null],[13,"Count","","",0,null],[13,"TakeUntilAndConsume","","",0,null],[13,"TakeUntil","","",0,null],[13,"TakeUntilEitherAndConsume","","",0,null],[13,"TakeUntilEither","","",0,null],[13,"LengthValue","","",0,null],[13,"TagClosure","","",0,null],[13,"Alpha","","",0,null],[13,"Digit","","",0,null],[13,"AlphaNumeric","","",0,null],[13,"Space","","",0,null],[13,"MultiSpace","","",0,null],[13,"LengthValueFn","","",0,null],[13,"Eof","","",0,null],[4,"Err","","",null,null],[13,"Code","","",1,null],[13,"Node","","",1,null],[13,"Position","","",1,null],[13,"NodePosition","","",1,null],[4,"Needed","","",null,null],[13,"Unknown","","",2,null],[13,"Size","","",2,null],[4,"IResult","","Holds the result of parsing functions",null,null],[13,"Done","","",3,null],[13,"Error","","",3,null],[13,"Incomplete","","",3,null],[4,"ProducerState","","Holds the data producer's current state",null,null],[13,"Eof","","",4,null],[13,"Continue","","",4,null],[13,"Data","","",4,null],[13,"ProducerError","","",4,null],[4,"ConsumerState","","Holds the current state of the consumer",null,null],[13,"Await","","",5,null],[13,"Seek","","",5,null],[13,"Incomplete","","",5,null],[13,"ConsumerDone","","",5,null],[13,"ConsumerError","","",5,null],[5,"error_to_list","","",null,{"inputs":[{"name":"err"}],"output":{"name":"vec"}}],[5,"compare_error_paths","","",null,{"inputs":[{"name":"err"},{"name":"err"}],"output":{"name":"bool"}}],[5,"add_error_pattern","","",null,{"inputs":[{"name":"hashmap"},{"name":"iresult"},{"name":"str"}],"output":{"name":"bool"}}],[5,"slice_to_offsets","","",null,null],[5,"prepare_errors","","",null,null],[5,"print_error","","",null,null],[5,"generate_colors","","",null,{"inputs":[{"name":"vec"}],"output":{"name":"hashmap"}}],[5,"code_from_offset","","",null,{"inputs":[{"name":"vec"},{"name":"usize"}],"output":{"name":"option"}}],[5,"reset_color","","",null,{"inputs":[{"name":"vec"}],"output":null}],[5,"write_color","","",null,{"inputs":[{"name":"vec"},{"name":"u8"}],"output":null}],[5,"print_codes","","",null,{"inputs":[{"name":"hashmap"},{"name":"hashmap"}],"output":{"name":"string"}}],[5,"print_offsets","","",null,null],[5,"tag_cl","","",null,null],[5,"print","","",null,{"inputs":[{"name":"t"}],"output":{"name":"iresult"}}],[5,"begin","","",null,null],[5,"not_line_ending","","",null,null],[5,"line_ending","","",null,null],[5,"is_alphabetic","","",null,{"inputs":[{"name":"u8"}],"output":{"name":"bool"}}],[5,"is_digit","","",null,{"inputs":[{"name":"u8"}],"output":{"name":"bool"}}],[5,"is_alphanumeric","","",null,{"inputs":[{"name":"u8"}],"output":{"name":"bool"}}],[5,"is_space","","",null,{"inputs":[{"name":"u8"}],"output":{"name":"bool"}}],[5,"alpha","","",null,null],[5,"digit","","",null,null],[5,"alphanumeric","","",null,null],[5,"space","","",null,null],[5,"multispace","","",null,null],[5,"sized_buffer","","",null,null],[5,"length_value","","",null,null],[5,"be_u8","","",null,null],[5,"be_u16","","",null,null],[5,"be_u32","","",null,null],[5,"be_u64","","",null,null],[5,"be_i8","","",null,null],[5,"be_i16","","",null,null],[5,"be_i32","","",null,null],[5,"be_i64","","",null,null],[5,"le_u8","","",null,null],[5,"le_u16","","",null,null],[5,"le_u32","","",null,null],[5,"le_u64","","",null,null],[5,"le_i8","","",null,null],[5,"le_i16","","",null,null],[5,"le_i32","","",null,null],[5,"le_i64","","",null,null],[5,"be_f32","","",null,null],[5,"be_f64","","",null,null],[5,"eof","","",null,null],[11,"clone","","",1,{"inputs":[{"name":"err"}],"output":{"name":"err"}}],[11,"eq","","",1,{"inputs":[{"name":"err"},{"name":"err"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"err"},{"name":"err"}],"output":{"name":"bool"}}],[11,"fmt","","",1,{"inputs":[{"name":"err"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"needed"}],"output":{"name":"needed"}}],[11,"eq","","",2,{"inputs":[{"name":"needed"},{"name":"needed"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"needed"},{"name":"needed"}],"output":{"name":"bool"}}],[11,"fmt","","",2,{"inputs":[{"name":"needed"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",3,{"inputs":[{"name":"iresult"}],"output":{"name":"iresult"}}],[11,"eq","","",3,{"inputs":[{"name":"iresult"},{"name":"iresult"}],"output":{"name":"bool"}}],[11,"ne","","",3,{"inputs":[{"name":"iresult"},{"name":"iresult"}],"output":{"name":"bool"}}],[11,"fmt","","",3,{"inputs":[{"name":"iresult"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"is_done","","",3,{"inputs":[{"name":"iresult"}],"output":{"name":"bool"}}],[11,"is_err","","",3,{"inputs":[{"name":"iresult"}],"output":{"name":"bool"}}],[11,"is_incomplete","","",3,{"inputs":[{"name":"iresult"}],"output":{"name":"bool"}}],[11,"remaining_input","","",3,{"inputs":[{"name":"iresult"}],"output":{"name":"option"}}],[11,"remaining_input","","",3,{"inputs":[{"name":"iresult"}],"output":{"name":"option"}}],[11,"output","","",3,{"inputs":[{"name":"iresult"}],"output":{"name":"option"}}],[11,"output","","",3,{"inputs":[{"name":"iresult"}],"output":{"name":"option"}}],[11,"eq","","",4,{"inputs":[{"name":"producerstate"},{"name":"producerstate"}],"output":{"name":"bool"}}],[11,"ne","","",4,{"inputs":[{"name":"producerstate"},{"name":"producerstate"}],"output":{"name":"bool"}}],[11,"fmt","","",4,{"inputs":[{"name":"producerstate"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",6,{"inputs":[{"name":"fileproducer"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",6,{"inputs":[{"name":"fileproducer"},{"name":"str"},{"name":"usize"}],"output":{"name":"result"}}],[11,"produce","","",6,{"inputs":[{"name":"fileproducer"}],"output":{"name":"producerstate"}}],[11,"seek","","",6,{"inputs":[{"name":"fileproducer"},{"name":"seekfrom"}],"output":{"name":"option"}}],[11,"new","","",7,null],[11,"produce","","",7,{"inputs":[{"name":"memproducer"}],"output":{"name":"producerstate"}}],[11,"seek","","",7,{"inputs":[{"name":"memproducer"},{"name":"seekfrom"}],"output":{"name":"option"}}],[11,"clone","","",5,{"inputs":[{"name":"consumerstate"}],"output":{"name":"consumerstate"}}],[11,"eq","","",5,{"inputs":[{"name":"consumerstate"},{"name":"consumerstate"}],"output":{"name":"bool"}}],[11,"ne","","",5,{"inputs":[{"name":"consumerstate"},{"name":"consumerstate"}],"output":{"name":"bool"}}],[11,"fmt","","",5,{"inputs":[{"name":"consumerstate"},{"name":"formatter"}],"output":{"name":"result"}}],[8,"HexDisplay","","",null,null],[10,"offset","","",8,null],[10,"to_hex","","Converts the value of `self` to a hex value, returning the owned\nstring.",8,{"inputs":[{"name":"hexdisplay"},{"name":"usize"}],"output":{"name":"string"}}],[10,"to_hex_from","","",8,{"inputs":[{"name":"hexdisplay"},{"name":"usize"},{"name":"usize"}],"output":{"name":"string"}}],[8,"AsBytes","","",null,null],[10,"as_bytes","","",9,null],[8,"GetInput","","",null,null],[10,"remaining_input","","",10,{"inputs":[{"name":"getinput"}],"output":{"name":"option"}}],[8,"GetOutput","","",null,null],[10,"output","","",11,{"inputs":[{"name":"getoutput"}],"output":{"name":"option"}}],[8,"Producer","","A producer implements the produce method, currently working with u8 arrays",null,null],[10,"produce","","",12,{"inputs":[{"name":"producer"}],"output":{"name":"producerstate"}}],[10,"seek","","",12,{"inputs":[{"name":"producer"},{"name":"seekfrom"}],"output":{"name":"option"}}],[8,"Consumer","","Implement the consume method, taking a byte array as input and returning a consumer state",null,null],[10,"consume","","",13,null],[10,"end","","",13,{"inputs":[{"name":"consumer"}],"output":null}],[11,"run","","",13,{"inputs":[{"name":"consumer"},{"name":"producer"}],"output":null}],[14,"dbg!","","Prints a message if the parser fails",null,null],[14,"dbg_dmp!","","Prints a message and the input if the parser fails",null,null],[14,"closure!","","Wraps a parser in a closure",null,null],[14,"named!","","Makes a function from a parser combination",null,null],[14,"call!","","Used to wrap common expressions and function as macros",null,null],[14,"apply!","","",null,null],[14,"error!","","Prevents backtracking if the child parser fails",null,null],[14,"tag!","","declares a byte array as a suite to recognize",null,null],[14,"flat_map!","","flat_map! combines a parser R -> IResult<R,S> and\na parser S -> IResult<S,T> to return another\nparser R -> IResult<R,T>",null,null],[14,"map!","","maps a function on the result of a parser",null,null],[14,"map_res!","","maps a function returning a Result on the output of a parser",null,null],[14,"map_opt!","","maps a function returning an Option on the output of a parser",null,null],[14,"chain!","","chains parsers and assemble the results through a closure",null,null],[14,"chaining_parser!","","Internal parser, do not use directly",null,null],[14,"alt!","","try a list of parser, return the result of the first successful one",null,null],[14,"alt_parser!","","Internal parser, do not use directly",null,null],[14,"is_not!","","returns the longest list of bytes that do not appear in the provided array",null,null],[14,"is_a!","","returns the longest list of bytes that appear in the provided array",null,null],[14,"filter!","","returns the longest list of bytes until the provided parser fails",null,null],[14,"opt!","","make the underlying parser optional",null,null],[14,"cond!","","Conditional combinator",null,null],[14,"peek!","","returns a result without consuming the input",null,null],[14,"pair!","","pair(X,Y), returns (x,y)",null,null],[14,"separated_pair!","","separated_pair(X,sep,Y) returns (x,y)",null,null],[14,"preceded!","","preceded(opening, X) returns X",null,null],[14,"terminated!","","terminated(X, closing) returns X",null,null],[14,"delimited!","","delimited(opening, X, closing) returns X",null,null],[14,"separated_list!","","separated_list(sep, X) returns Vec<X>",null,null],[14,"separated_nonempty_list!","","separated_nonempty_list(sep, X) returns Vec<X>",null,null],[14,"many0!","","Applies the parser 0 or more times and returns the list of results in a Vec",null,null],[14,"many1!","","Applies the parser 1 or more times and returns the list of results in a Vec",null,null],[14,"count!","","Applies the child parser a specified number of times",null,null],[14,"count_fixed!","","Applies the child parser a fixed number of times and returns a fixed size array",null,null],[14,"take!","","generates a parser consuming the specified number of bytes",null,null],[14,"take_str!","","same as take! but returning a &str",null,null],[14,"take_until_and_consume!","","generates a parser consuming bytes until the specified byte sequence is found",null,null],[14,"take_until!","","",null,null],[14,"take_until_either_and_consume!","","",null,null],[14,"take_until_either!","","",null,null],[14,"length_value!","","returns",null,null],[14,"pusher!","","Prepares a parser function for a push pipeline",null,null],[11,"run","","",13,null]],"paths":[[4,"ErrorCode"],[4,"Err"],[4,"Needed"],[4,"IResult"],[4,"ProducerState"],[4,"ConsumerState"],[3,"FileProducer"],[3,"MemProducer"],[8,"HexDisplay"],[8,"AsBytes"],[8,"GetInput"],[8,"GetOutput"],[8,"Producer"],[8,"Consumer"]]};
initSearch(searchIndex);
