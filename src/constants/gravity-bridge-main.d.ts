import * as $protobuf from "protobufjs";
/** Namespace gravity. */
export namespace gravity {

    /** Namespace v1. */
    namespace v1 {

        /** Properties of an EthereumEventVoteRecord. */
        interface IEthereumEventVoteRecord {

            /** EthereumEventVoteRecord event */
            event?: (google.protobuf.IAny|null);

            /** EthereumEventVoteRecord votes */
            votes?: (string[]|null);

            /** EthereumEventVoteRecord accepted */
            accepted?: (boolean|null);
        }

        /** Represents an EthereumEventVoteRecord. */
        class EthereumEventVoteRecord implements IEthereumEventVoteRecord {

            /**
             * Constructs a new EthereumEventVoteRecord.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IEthereumEventVoteRecord);

            /** EthereumEventVoteRecord event. */
            public event?: (google.protobuf.IAny|null);

            /** EthereumEventVoteRecord votes. */
            public votes: string[];

            /** EthereumEventVoteRecord accepted. */
            public accepted: boolean;

            /**
             * Encodes the specified EthereumEventVoteRecord message. Does not implicitly {@link gravity.v1.EthereumEventVoteRecord.verify|verify} messages.
             * @param message EthereumEventVoteRecord message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IEthereumEventVoteRecord, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EthereumEventVoteRecord message, length delimited. Does not implicitly {@link gravity.v1.EthereumEventVoteRecord.verify|verify} messages.
             * @param message EthereumEventVoteRecord message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IEthereumEventVoteRecord, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EthereumEventVoteRecord message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EthereumEventVoteRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.EthereumEventVoteRecord;

            /**
             * Decodes an EthereumEventVoteRecord message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EthereumEventVoteRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.EthereumEventVoteRecord;

            /**
             * Verifies an EthereumEventVoteRecord message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EthereumEventVoteRecord message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EthereumEventVoteRecord
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.EthereumEventVoteRecord;

            /**
             * Creates a plain object from an EthereumEventVoteRecord message. Also converts values to other types if specified.
             * @param message EthereumEventVoteRecord
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.EthereumEventVoteRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EthereumEventVoteRecord to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LatestEthereumBlockHeight. */
        interface ILatestEthereumBlockHeight {

            /** LatestEthereumBlockHeight ethereum_height */
            ethereum_height?: (Long|null);

            /** LatestEthereumBlockHeight cosmos_height */
            cosmos_height?: (Long|null);
        }

        /** Represents a LatestEthereumBlockHeight. */
        class LatestEthereumBlockHeight implements ILatestEthereumBlockHeight {

            /**
             * Constructs a new LatestEthereumBlockHeight.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.ILatestEthereumBlockHeight);

            /** LatestEthereumBlockHeight ethereum_height. */
            public ethereum_height: Long;

            /** LatestEthereumBlockHeight cosmos_height. */
            public cosmos_height: Long;

            /**
             * Encodes the specified LatestEthereumBlockHeight message. Does not implicitly {@link gravity.v1.LatestEthereumBlockHeight.verify|verify} messages.
             * @param message LatestEthereumBlockHeight message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.ILatestEthereumBlockHeight, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LatestEthereumBlockHeight message, length delimited. Does not implicitly {@link gravity.v1.LatestEthereumBlockHeight.verify|verify} messages.
             * @param message LatestEthereumBlockHeight message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.ILatestEthereumBlockHeight, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LatestEthereumBlockHeight message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LatestEthereumBlockHeight
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.LatestEthereumBlockHeight;

            /**
             * Decodes a LatestEthereumBlockHeight message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LatestEthereumBlockHeight
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.LatestEthereumBlockHeight;

            /**
             * Verifies a LatestEthereumBlockHeight message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LatestEthereumBlockHeight message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LatestEthereumBlockHeight
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.LatestEthereumBlockHeight;

            /**
             * Creates a plain object from a LatestEthereumBlockHeight message. Also converts values to other types if specified.
             * @param message LatestEthereumBlockHeight
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.LatestEthereumBlockHeight, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LatestEthereumBlockHeight to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EthereumSigner. */
        interface IEthereumSigner {

            /** EthereumSigner power */
            power?: (Long|null);

            /** EthereumSigner ethereum_address */
            ethereum_address?: (string|null);
        }

        /** Represents an EthereumSigner. */
        class EthereumSigner implements IEthereumSigner {

            /**
             * Constructs a new EthereumSigner.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IEthereumSigner);

            /** EthereumSigner power. */
            public power: Long;

            /** EthereumSigner ethereum_address. */
            public ethereum_address: string;

            /**
             * Encodes the specified EthereumSigner message. Does not implicitly {@link gravity.v1.EthereumSigner.verify|verify} messages.
             * @param message EthereumSigner message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IEthereumSigner, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EthereumSigner message, length delimited. Does not implicitly {@link gravity.v1.EthereumSigner.verify|verify} messages.
             * @param message EthereumSigner message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IEthereumSigner, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EthereumSigner message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EthereumSigner
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.EthereumSigner;

            /**
             * Decodes an EthereumSigner message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EthereumSigner
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.EthereumSigner;

            /**
             * Verifies an EthereumSigner message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EthereumSigner message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EthereumSigner
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.EthereumSigner;

            /**
             * Creates a plain object from an EthereumSigner message. Also converts values to other types if specified.
             * @param message EthereumSigner
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.EthereumSigner, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EthereumSigner to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SignerSetTx. */
        interface ISignerSetTx {

            /** SignerSetTx nonce */
            nonce?: (Long|null);

            /** SignerSetTx height */
            height?: (Long|null);

            /** SignerSetTx signers */
            signers?: (gravity.v1.IEthereumSigner[]|null);
        }

        /** Represents a SignerSetTx. */
        class SignerSetTx implements ISignerSetTx {

            /**
             * Constructs a new SignerSetTx.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.ISignerSetTx);

            /** SignerSetTx nonce. */
            public nonce: Long;

            /** SignerSetTx height. */
            public height: Long;

            /** SignerSetTx signers. */
            public signers: gravity.v1.IEthereumSigner[];

            /**
             * Encodes the specified SignerSetTx message. Does not implicitly {@link gravity.v1.SignerSetTx.verify|verify} messages.
             * @param message SignerSetTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.ISignerSetTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SignerSetTx message, length delimited. Does not implicitly {@link gravity.v1.SignerSetTx.verify|verify} messages.
             * @param message SignerSetTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.ISignerSetTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SignerSetTx message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SignerSetTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.SignerSetTx;

            /**
             * Decodes a SignerSetTx message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SignerSetTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.SignerSetTx;

            /**
             * Verifies a SignerSetTx message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SignerSetTx message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SignerSetTx
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.SignerSetTx;

            /**
             * Creates a plain object from a SignerSetTx message. Also converts values to other types if specified.
             * @param message SignerSetTx
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.SignerSetTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SignerSetTx to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BatchTx. */
        interface IBatchTx {

            /** BatchTx batch_nonce */
            batch_nonce?: (Long|null);

            /** BatchTx timeout */
            timeout?: (Long|null);

            /** BatchTx transactions */
            transactions?: (gravity.v1.ISendToEthereum[]|null);

            /** BatchTx token_contract */
            token_contract?: (string|null);

            /** BatchTx height */
            height?: (Long|null);
        }

        /** Represents a BatchTx. */
        class BatchTx implements IBatchTx {

            /**
             * Constructs a new BatchTx.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IBatchTx);

            /** BatchTx batch_nonce. */
            public batch_nonce: Long;

            /** BatchTx timeout. */
            public timeout: Long;

            /** BatchTx transactions. */
            public transactions: gravity.v1.ISendToEthereum[];

            /** BatchTx token_contract. */
            public token_contract: string;

            /** BatchTx height. */
            public height: Long;

            /**
             * Encodes the specified BatchTx message. Does not implicitly {@link gravity.v1.BatchTx.verify|verify} messages.
             * @param message BatchTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IBatchTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchTx message, length delimited. Does not implicitly {@link gravity.v1.BatchTx.verify|verify} messages.
             * @param message BatchTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IBatchTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchTx message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.BatchTx;

            /**
             * Decodes a BatchTx message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.BatchTx;

            /**
             * Verifies a BatchTx message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchTx message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchTx
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.BatchTx;

            /**
             * Creates a plain object from a BatchTx message. Also converts values to other types if specified.
             * @param message BatchTx
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.BatchTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchTx to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SendToEthereum. */
        interface ISendToEthereum {

            /** SendToEthereum id */
            id?: (Long|null);

            /** SendToEthereum sender */
            sender?: (string|null);

            /** SendToEthereum ethereum_recipient */
            ethereum_recipient?: (string|null);

            /** SendToEthereum erc20_token */
            erc20_token?: (gravity.v1.IERC20Token|null);

            /** SendToEthereum erc20_fee */
            erc20_fee?: (gravity.v1.IERC20Token|null);
        }

        /** Represents a SendToEthereum. */
        class SendToEthereum implements ISendToEthereum {

            /**
             * Constructs a new SendToEthereum.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.ISendToEthereum);

            /** SendToEthereum id. */
            public id: Long;

            /** SendToEthereum sender. */
            public sender: string;

            /** SendToEthereum ethereum_recipient. */
            public ethereum_recipient: string;

            /** SendToEthereum erc20_token. */
            public erc20_token?: (gravity.v1.IERC20Token|null);

            /** SendToEthereum erc20_fee. */
            public erc20_fee?: (gravity.v1.IERC20Token|null);

            /**
             * Encodes the specified SendToEthereum message. Does not implicitly {@link gravity.v1.SendToEthereum.verify|verify} messages.
             * @param message SendToEthereum message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.ISendToEthereum, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SendToEthereum message, length delimited. Does not implicitly {@link gravity.v1.SendToEthereum.verify|verify} messages.
             * @param message SendToEthereum message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.ISendToEthereum, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SendToEthereum message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SendToEthereum
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.SendToEthereum;

            /**
             * Decodes a SendToEthereum message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SendToEthereum
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.SendToEthereum;

            /**
             * Verifies a SendToEthereum message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SendToEthereum message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SendToEthereum
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.SendToEthereum;

            /**
             * Creates a plain object from a SendToEthereum message. Also converts values to other types if specified.
             * @param message SendToEthereum
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.SendToEthereum, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SendToEthereum to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ContractCallTx. */
        interface IContractCallTx {

            /** ContractCallTx invalidation_nonce */
            invalidation_nonce?: (Long|null);

            /** ContractCallTx invalidation_scope */
            invalidation_scope?: (Uint8Array|null);

            /** ContractCallTx address */
            address?: (string|null);

            /** ContractCallTx payload */
            payload?: (Uint8Array|null);

            /** ContractCallTx timeout */
            timeout?: (Long|null);

            /** ContractCallTx tokens */
            tokens?: (gravity.v1.IERC20Token[]|null);

            /** ContractCallTx fees */
            fees?: (gravity.v1.IERC20Token[]|null);

            /** ContractCallTx height */
            height?: (Long|null);
        }

        /** Represents a ContractCallTx. */
        class ContractCallTx implements IContractCallTx {

            /**
             * Constructs a new ContractCallTx.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IContractCallTx);

            /** ContractCallTx invalidation_nonce. */
            public invalidation_nonce: Long;

            /** ContractCallTx invalidation_scope. */
            public invalidation_scope: Uint8Array;

            /** ContractCallTx address. */
            public address: string;

            /** ContractCallTx payload. */
            public payload: Uint8Array;

            /** ContractCallTx timeout. */
            public timeout: Long;

            /** ContractCallTx tokens. */
            public tokens: gravity.v1.IERC20Token[];

            /** ContractCallTx fees. */
            public fees: gravity.v1.IERC20Token[];

            /** ContractCallTx height. */
            public height: Long;

            /**
             * Encodes the specified ContractCallTx message. Does not implicitly {@link gravity.v1.ContractCallTx.verify|verify} messages.
             * @param message ContractCallTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IContractCallTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ContractCallTx message, length delimited. Does not implicitly {@link gravity.v1.ContractCallTx.verify|verify} messages.
             * @param message ContractCallTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IContractCallTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ContractCallTx message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ContractCallTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.ContractCallTx;

            /**
             * Decodes a ContractCallTx message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ContractCallTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.ContractCallTx;

            /**
             * Verifies a ContractCallTx message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ContractCallTx message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ContractCallTx
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.ContractCallTx;

            /**
             * Creates a plain object from a ContractCallTx message. Also converts values to other types if specified.
             * @param message ContractCallTx
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.ContractCallTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ContractCallTx to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ERC20Token. */
        interface IERC20Token {

            /** ERC20Token contract */
            contract?: (string|null);

            /** ERC20Token amount */
            amount?: (string|null);
        }

        /** Represents a ERC20Token. */
        class ERC20Token implements IERC20Token {

            /**
             * Constructs a new ERC20Token.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IERC20Token);

            /** ERC20Token contract. */
            public contract: string;

            /** ERC20Token amount. */
            public amount: string;

            /**
             * Encodes the specified ERC20Token message. Does not implicitly {@link gravity.v1.ERC20Token.verify|verify} messages.
             * @param message ERC20Token message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IERC20Token, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ERC20Token message, length delimited. Does not implicitly {@link gravity.v1.ERC20Token.verify|verify} messages.
             * @param message ERC20Token message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IERC20Token, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ERC20Token message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ERC20Token
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.ERC20Token;

            /**
             * Decodes a ERC20Token message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ERC20Token
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.ERC20Token;

            /**
             * Verifies a ERC20Token message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ERC20Token message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ERC20Token
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.ERC20Token;

            /**
             * Creates a plain object from a ERC20Token message. Also converts values to other types if specified.
             * @param message ERC20Token
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.ERC20Token, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ERC20Token to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a IDSet. */
        interface IIDSet {

            /** IDSet ids */
            ids?: (Long[]|null);
        }

        /** Represents a IDSet. */
        class IDSet implements IIDSet {

            /**
             * Constructs a new IDSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IIDSet);

            /** IDSet ids. */
            public ids: Long[];

            /**
             * Encodes the specified IDSet message. Does not implicitly {@link gravity.v1.IDSet.verify|verify} messages.
             * @param message IDSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IIDSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified IDSet message, length delimited. Does not implicitly {@link gravity.v1.IDSet.verify|verify} messages.
             * @param message IDSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IIDSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a IDSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IDSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.IDSet;

            /**
             * Decodes a IDSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns IDSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.IDSet;

            /**
             * Verifies a IDSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a IDSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns IDSet
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.IDSet;

            /**
             * Creates a plain object from a IDSet message. Also converts values to other types if specified.
             * @param message IDSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.IDSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this IDSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a Query */
        class Query extends $protobuf.rpc.Service {

            /**
             * Constructs a new Query service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Calls Params.
             * @param request ParamsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ParamsResponse
             */
            public params(request: gravity.v1.IParamsRequest, callback: gravity.v1.Query.ParamsCallback): void;

            /**
             * Calls Params.
             * @param request ParamsRequest message or plain object
             * @returns Promise
             */
            public params(request: gravity.v1.IParamsRequest): Promise<gravity.v1.ParamsResponse>;

            /**
             * Calls SignerSetTx.
             * @param request SignerSetTxRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and SignerSetTxResponse
             */
            public signerSetTx(request: gravity.v1.ISignerSetTxRequest, callback: gravity.v1.Query.SignerSetTxCallback): void;

            /**
             * Calls SignerSetTx.
             * @param request SignerSetTxRequest message or plain object
             * @returns Promise
             */
            public signerSetTx(request: gravity.v1.ISignerSetTxRequest): Promise<gravity.v1.SignerSetTxResponse>;

            /**
             * Calls LatestSignerSetTx.
             * @param request LatestSignerSetTxRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and SignerSetTxResponse
             */
            public latestSignerSetTx(request: gravity.v1.ILatestSignerSetTxRequest, callback: gravity.v1.Query.LatestSignerSetTxCallback): void;

            /**
             * Calls LatestSignerSetTx.
             * @param request LatestSignerSetTxRequest message or plain object
             * @returns Promise
             */
            public latestSignerSetTx(request: gravity.v1.ILatestSignerSetTxRequest): Promise<gravity.v1.SignerSetTxResponse>;

            /**
             * Calls BatchTx.
             * @param request BatchTxRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and BatchTxResponse
             */
            public batchTx(request: gravity.v1.IBatchTxRequest, callback: gravity.v1.Query.BatchTxCallback): void;

            /**
             * Calls BatchTx.
             * @param request BatchTxRequest message or plain object
             * @returns Promise
             */
            public batchTx(request: gravity.v1.IBatchTxRequest): Promise<gravity.v1.BatchTxResponse>;

            /**
             * Calls ContractCallTx.
             * @param request ContractCallTxRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ContractCallTxResponse
             */
            public contractCallTx(request: gravity.v1.IContractCallTxRequest, callback: gravity.v1.Query.ContractCallTxCallback): void;

            /**
             * Calls ContractCallTx.
             * @param request ContractCallTxRequest message or plain object
             * @returns Promise
             */
            public contractCallTx(request: gravity.v1.IContractCallTxRequest): Promise<gravity.v1.ContractCallTxResponse>;

            /**
             * Calls SignerSetTxs.
             * @param request SignerSetTxsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and SignerSetTxsResponse
             */
            public signerSetTxs(request: gravity.v1.ISignerSetTxsRequest, callback: gravity.v1.Query.SignerSetTxsCallback): void;

            /**
             * Calls SignerSetTxs.
             * @param request SignerSetTxsRequest message or plain object
             * @returns Promise
             */
            public signerSetTxs(request: gravity.v1.ISignerSetTxsRequest): Promise<gravity.v1.SignerSetTxsResponse>;

            /**
             * Calls BatchTxs.
             * @param request BatchTxsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and BatchTxsResponse
             */
            public batchTxs(request: gravity.v1.IBatchTxsRequest, callback: gravity.v1.Query.BatchTxsCallback): void;

            /**
             * Calls BatchTxs.
             * @param request BatchTxsRequest message or plain object
             * @returns Promise
             */
            public batchTxs(request: gravity.v1.IBatchTxsRequest): Promise<gravity.v1.BatchTxsResponse>;

            /**
             * Calls ContractCallTxs.
             * @param request ContractCallTxsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ContractCallTxsResponse
             */
            public contractCallTxs(request: gravity.v1.IContractCallTxsRequest, callback: gravity.v1.Query.ContractCallTxsCallback): void;

            /**
             * Calls ContractCallTxs.
             * @param request ContractCallTxsRequest message or plain object
             * @returns Promise
             */
            public contractCallTxs(request: gravity.v1.IContractCallTxsRequest): Promise<gravity.v1.ContractCallTxsResponse>;

            /**
             * Calls SignerSetTxConfirmations.
             * @param request SignerSetTxConfirmationsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and SignerSetTxConfirmationsResponse
             */
            public signerSetTxConfirmations(request: gravity.v1.ISignerSetTxConfirmationsRequest, callback: gravity.v1.Query.SignerSetTxConfirmationsCallback): void;

            /**
             * Calls SignerSetTxConfirmations.
             * @param request SignerSetTxConfirmationsRequest message or plain object
             * @returns Promise
             */
            public signerSetTxConfirmations(request: gravity.v1.ISignerSetTxConfirmationsRequest): Promise<gravity.v1.SignerSetTxConfirmationsResponse>;

            /**
             * Calls BatchTxConfirmations.
             * @param request BatchTxConfirmationsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and BatchTxConfirmationsResponse
             */
            public batchTxConfirmations(request: gravity.v1.IBatchTxConfirmationsRequest, callback: gravity.v1.Query.BatchTxConfirmationsCallback): void;

            /**
             * Calls BatchTxConfirmations.
             * @param request BatchTxConfirmationsRequest message or plain object
             * @returns Promise
             */
            public batchTxConfirmations(request: gravity.v1.IBatchTxConfirmationsRequest): Promise<gravity.v1.BatchTxConfirmationsResponse>;

            /**
             * Calls ContractCallTxConfirmations.
             * @param request ContractCallTxConfirmationsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ContractCallTxConfirmationsResponse
             */
            public contractCallTxConfirmations(request: gravity.v1.IContractCallTxConfirmationsRequest, callback: gravity.v1.Query.ContractCallTxConfirmationsCallback): void;

            /**
             * Calls ContractCallTxConfirmations.
             * @param request ContractCallTxConfirmationsRequest message or plain object
             * @returns Promise
             */
            public contractCallTxConfirmations(request: gravity.v1.IContractCallTxConfirmationsRequest): Promise<gravity.v1.ContractCallTxConfirmationsResponse>;

            /**
             * Calls UnsignedSignerSetTxs.
             * @param request UnsignedSignerSetTxsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and UnsignedSignerSetTxsResponse
             */
            public unsignedSignerSetTxs(request: gravity.v1.IUnsignedSignerSetTxsRequest, callback: gravity.v1.Query.UnsignedSignerSetTxsCallback): void;

            /**
             * Calls UnsignedSignerSetTxs.
             * @param request UnsignedSignerSetTxsRequest message or plain object
             * @returns Promise
             */
            public unsignedSignerSetTxs(request: gravity.v1.IUnsignedSignerSetTxsRequest): Promise<gravity.v1.UnsignedSignerSetTxsResponse>;

            /**
             * Calls UnsignedBatchTxs.
             * @param request UnsignedBatchTxsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and UnsignedBatchTxsResponse
             */
            public unsignedBatchTxs(request: gravity.v1.IUnsignedBatchTxsRequest, callback: gravity.v1.Query.UnsignedBatchTxsCallback): void;

            /**
             * Calls UnsignedBatchTxs.
             * @param request UnsignedBatchTxsRequest message or plain object
             * @returns Promise
             */
            public unsignedBatchTxs(request: gravity.v1.IUnsignedBatchTxsRequest): Promise<gravity.v1.UnsignedBatchTxsResponse>;

            /**
             * Calls UnsignedContractCallTxs.
             * @param request UnsignedContractCallTxsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and UnsignedContractCallTxsResponse
             */
            public unsignedContractCallTxs(request: gravity.v1.IUnsignedContractCallTxsRequest, callback: gravity.v1.Query.UnsignedContractCallTxsCallback): void;

            /**
             * Calls UnsignedContractCallTxs.
             * @param request UnsignedContractCallTxsRequest message or plain object
             * @returns Promise
             */
            public unsignedContractCallTxs(request: gravity.v1.IUnsignedContractCallTxsRequest): Promise<gravity.v1.UnsignedContractCallTxsResponse>;

            /**
             * Calls LastSubmittedEthereumEvent.
             * @param request LastSubmittedEthereumEventRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LastSubmittedEthereumEventResponse
             */
            public lastSubmittedEthereumEvent(request: gravity.v1.ILastSubmittedEthereumEventRequest, callback: gravity.v1.Query.LastSubmittedEthereumEventCallback): void;

            /**
             * Calls LastSubmittedEthereumEvent.
             * @param request LastSubmittedEthereumEventRequest message or plain object
             * @returns Promise
             */
            public lastSubmittedEthereumEvent(request: gravity.v1.ILastSubmittedEthereumEventRequest): Promise<gravity.v1.LastSubmittedEthereumEventResponse>;

            /**
             * Calls BatchTxFees.
             * @param request BatchTxFeesRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and BatchTxFeesResponse
             */
            public batchTxFees(request: gravity.v1.IBatchTxFeesRequest, callback: gravity.v1.Query.BatchTxFeesCallback): void;

            /**
             * Calls BatchTxFees.
             * @param request BatchTxFeesRequest message or plain object
             * @returns Promise
             */
            public batchTxFees(request: gravity.v1.IBatchTxFeesRequest): Promise<gravity.v1.BatchTxFeesResponse>;

            /**
             * Calls ERC20ToDenom.
             * @param request ERC20ToDenomRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ERC20ToDenomResponse
             */
            public eRC20ToDenom(request: gravity.v1.IERC20ToDenomRequest, callback: gravity.v1.Query.ERC20ToDenomCallback): void;

            /**
             * Calls ERC20ToDenom.
             * @param request ERC20ToDenomRequest message or plain object
             * @returns Promise
             */
            public eRC20ToDenom(request: gravity.v1.IERC20ToDenomRequest): Promise<gravity.v1.ERC20ToDenomResponse>;

            /**
             * Calls DenomToERC20Params.
             * @param request DenomToERC20ParamsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and DenomToERC20ParamsResponse
             */
            public denomToERC20Params(request: gravity.v1.IDenomToERC20ParamsRequest, callback: gravity.v1.Query.DenomToERC20ParamsCallback): void;

            /**
             * Calls DenomToERC20Params.
             * @param request DenomToERC20ParamsRequest message or plain object
             * @returns Promise
             */
            public denomToERC20Params(request: gravity.v1.IDenomToERC20ParamsRequest): Promise<gravity.v1.DenomToERC20ParamsResponse>;

            /**
             * Calls DenomToERC20.
             * @param request DenomToERC20Request message or plain object
             * @param callback Node-style callback called with the error, if any, and DenomToERC20Response
             */
            public denomToERC20(request: gravity.v1.IDenomToERC20Request, callback: gravity.v1.Query.DenomToERC20Callback): void;

            /**
             * Calls DenomToERC20.
             * @param request DenomToERC20Request message or plain object
             * @returns Promise
             */
            public denomToERC20(request: gravity.v1.IDenomToERC20Request): Promise<gravity.v1.DenomToERC20Response>;

            /**
             * Calls BatchedSendToEthereums.
             * @param request BatchedSendToEthereumsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and BatchedSendToEthereumsResponse
             */
            public batchedSendToEthereums(request: gravity.v1.IBatchedSendToEthereumsRequest, callback: gravity.v1.Query.BatchedSendToEthereumsCallback): void;

            /**
             * Calls BatchedSendToEthereums.
             * @param request BatchedSendToEthereumsRequest message or plain object
             * @returns Promise
             */
            public batchedSendToEthereums(request: gravity.v1.IBatchedSendToEthereumsRequest): Promise<gravity.v1.BatchedSendToEthereumsResponse>;

            /**
             * Calls UnbatchedSendToEthereums.
             * @param request UnbatchedSendToEthereumsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and UnbatchedSendToEthereumsResponse
             */
            public unbatchedSendToEthereums(request: gravity.v1.IUnbatchedSendToEthereumsRequest, callback: gravity.v1.Query.UnbatchedSendToEthereumsCallback): void;

            /**
             * Calls UnbatchedSendToEthereums.
             * @param request UnbatchedSendToEthereumsRequest message or plain object
             * @returns Promise
             */
            public unbatchedSendToEthereums(request: gravity.v1.IUnbatchedSendToEthereumsRequest): Promise<gravity.v1.UnbatchedSendToEthereumsResponse>;

            /**
             * Calls DelegateKeysByValidator.
             * @param request DelegateKeysByValidatorRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and DelegateKeysByValidatorResponse
             */
            public delegateKeysByValidator(request: gravity.v1.IDelegateKeysByValidatorRequest, callback: gravity.v1.Query.DelegateKeysByValidatorCallback): void;

            /**
             * Calls DelegateKeysByValidator.
             * @param request DelegateKeysByValidatorRequest message or plain object
             * @returns Promise
             */
            public delegateKeysByValidator(request: gravity.v1.IDelegateKeysByValidatorRequest): Promise<gravity.v1.DelegateKeysByValidatorResponse>;

            /**
             * Calls DelegateKeysByEthereumSigner.
             * @param request DelegateKeysByEthereumSignerRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and DelegateKeysByEthereumSignerResponse
             */
            public delegateKeysByEthereumSigner(request: gravity.v1.IDelegateKeysByEthereumSignerRequest, callback: gravity.v1.Query.DelegateKeysByEthereumSignerCallback): void;

            /**
             * Calls DelegateKeysByEthereumSigner.
             * @param request DelegateKeysByEthereumSignerRequest message or plain object
             * @returns Promise
             */
            public delegateKeysByEthereumSigner(request: gravity.v1.IDelegateKeysByEthereumSignerRequest): Promise<gravity.v1.DelegateKeysByEthereumSignerResponse>;

            /**
             * Calls DelegateKeysByOrchestrator.
             * @param request DelegateKeysByOrchestratorRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and DelegateKeysByOrchestratorResponse
             */
            public delegateKeysByOrchestrator(request: gravity.v1.IDelegateKeysByOrchestratorRequest, callback: gravity.v1.Query.DelegateKeysByOrchestratorCallback): void;

            /**
             * Calls DelegateKeysByOrchestrator.
             * @param request DelegateKeysByOrchestratorRequest message or plain object
             * @returns Promise
             */
            public delegateKeysByOrchestrator(request: gravity.v1.IDelegateKeysByOrchestratorRequest): Promise<gravity.v1.DelegateKeysByOrchestratorResponse>;

            /**
             * Calls DelegateKeys.
             * @param request DelegateKeysRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and DelegateKeysResponse
             */
            public delegateKeys(request: gravity.v1.IDelegateKeysRequest, callback: gravity.v1.Query.DelegateKeysCallback): void;

            /**
             * Calls DelegateKeys.
             * @param request DelegateKeysRequest message or plain object
             * @returns Promise
             */
            public delegateKeys(request: gravity.v1.IDelegateKeysRequest): Promise<gravity.v1.DelegateKeysResponse>;
        }

        namespace Query {

            /**
             * Callback as used by {@link gravity.v1.Query#params}.
             * @param error Error, if any
             * @param [response] ParamsResponse
             */
            type ParamsCallback = (error: (Error|null), response?: gravity.v1.ParamsResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#signerSetTx}.
             * @param error Error, if any
             * @param [response] SignerSetTxResponse
             */
            type SignerSetTxCallback = (error: (Error|null), response?: gravity.v1.SignerSetTxResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#latestSignerSetTx}.
             * @param error Error, if any
             * @param [response] SignerSetTxResponse
             */
            type LatestSignerSetTxCallback = (error: (Error|null), response?: gravity.v1.SignerSetTxResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#batchTx}.
             * @param error Error, if any
             * @param [response] BatchTxResponse
             */
            type BatchTxCallback = (error: (Error|null), response?: gravity.v1.BatchTxResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#contractCallTx}.
             * @param error Error, if any
             * @param [response] ContractCallTxResponse
             */
            type ContractCallTxCallback = (error: (Error|null), response?: gravity.v1.ContractCallTxResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#signerSetTxs}.
             * @param error Error, if any
             * @param [response] SignerSetTxsResponse
             */
            type SignerSetTxsCallback = (error: (Error|null), response?: gravity.v1.SignerSetTxsResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#batchTxs}.
             * @param error Error, if any
             * @param [response] BatchTxsResponse
             */
            type BatchTxsCallback = (error: (Error|null), response?: gravity.v1.BatchTxsResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#contractCallTxs}.
             * @param error Error, if any
             * @param [response] ContractCallTxsResponse
             */
            type ContractCallTxsCallback = (error: (Error|null), response?: gravity.v1.ContractCallTxsResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#signerSetTxConfirmations}.
             * @param error Error, if any
             * @param [response] SignerSetTxConfirmationsResponse
             */
            type SignerSetTxConfirmationsCallback = (error: (Error|null), response?: gravity.v1.SignerSetTxConfirmationsResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#batchTxConfirmations}.
             * @param error Error, if any
             * @param [response] BatchTxConfirmationsResponse
             */
            type BatchTxConfirmationsCallback = (error: (Error|null), response?: gravity.v1.BatchTxConfirmationsResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#contractCallTxConfirmations}.
             * @param error Error, if any
             * @param [response] ContractCallTxConfirmationsResponse
             */
            type ContractCallTxConfirmationsCallback = (error: (Error|null), response?: gravity.v1.ContractCallTxConfirmationsResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#unsignedSignerSetTxs}.
             * @param error Error, if any
             * @param [response] UnsignedSignerSetTxsResponse
             */
            type UnsignedSignerSetTxsCallback = (error: (Error|null), response?: gravity.v1.UnsignedSignerSetTxsResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#unsignedBatchTxs}.
             * @param error Error, if any
             * @param [response] UnsignedBatchTxsResponse
             */
            type UnsignedBatchTxsCallback = (error: (Error|null), response?: gravity.v1.UnsignedBatchTxsResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#unsignedContractCallTxs}.
             * @param error Error, if any
             * @param [response] UnsignedContractCallTxsResponse
             */
            type UnsignedContractCallTxsCallback = (error: (Error|null), response?: gravity.v1.UnsignedContractCallTxsResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#lastSubmittedEthereumEvent}.
             * @param error Error, if any
             * @param [response] LastSubmittedEthereumEventResponse
             */
            type LastSubmittedEthereumEventCallback = (error: (Error|null), response?: gravity.v1.LastSubmittedEthereumEventResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#batchTxFees}.
             * @param error Error, if any
             * @param [response] BatchTxFeesResponse
             */
            type BatchTxFeesCallback = (error: (Error|null), response?: gravity.v1.BatchTxFeesResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#eRC20ToDenom}.
             * @param error Error, if any
             * @param [response] ERC20ToDenomResponse
             */
            type ERC20ToDenomCallback = (error: (Error|null), response?: gravity.v1.ERC20ToDenomResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#denomToERC20Params}.
             * @param error Error, if any
             * @param [response] DenomToERC20ParamsResponse
             */
            type DenomToERC20ParamsCallback = (error: (Error|null), response?: gravity.v1.DenomToERC20ParamsResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#denomToERC20}.
             * @param error Error, if any
             * @param [response] DenomToERC20Response
             */
            type DenomToERC20Callback = (error: (Error|null), response?: gravity.v1.DenomToERC20Response) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#batchedSendToEthereums}.
             * @param error Error, if any
             * @param [response] BatchedSendToEthereumsResponse
             */
            type BatchedSendToEthereumsCallback = (error: (Error|null), response?: gravity.v1.BatchedSendToEthereumsResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#unbatchedSendToEthereums}.
             * @param error Error, if any
             * @param [response] UnbatchedSendToEthereumsResponse
             */
            type UnbatchedSendToEthereumsCallback = (error: (Error|null), response?: gravity.v1.UnbatchedSendToEthereumsResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#delegateKeysByValidator}.
             * @param error Error, if any
             * @param [response] DelegateKeysByValidatorResponse
             */
            type DelegateKeysByValidatorCallback = (error: (Error|null), response?: gravity.v1.DelegateKeysByValidatorResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#delegateKeysByEthereumSigner}.
             * @param error Error, if any
             * @param [response] DelegateKeysByEthereumSignerResponse
             */
            type DelegateKeysByEthereumSignerCallback = (error: (Error|null), response?: gravity.v1.DelegateKeysByEthereumSignerResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#delegateKeysByOrchestrator}.
             * @param error Error, if any
             * @param [response] DelegateKeysByOrchestratorResponse
             */
            type DelegateKeysByOrchestratorCallback = (error: (Error|null), response?: gravity.v1.DelegateKeysByOrchestratorResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#delegateKeys}.
             * @param error Error, if any
             * @param [response] DelegateKeysResponse
             */
            type DelegateKeysCallback = (error: (Error|null), response?: gravity.v1.DelegateKeysResponse) => void;
        }

        /** Properties of a ParamsRequest. */
        interface IParamsRequest {
        }

        /** Represents a ParamsRequest. */
        class ParamsRequest implements IParamsRequest {

            /**
             * Constructs a new ParamsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IParamsRequest);

            /**
             * Encodes the specified ParamsRequest message. Does not implicitly {@link gravity.v1.ParamsRequest.verify|verify} messages.
             * @param message ParamsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IParamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ParamsRequest message, length delimited. Does not implicitly {@link gravity.v1.ParamsRequest.verify|verify} messages.
             * @param message ParamsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IParamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ParamsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ParamsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.ParamsRequest;

            /**
             * Decodes a ParamsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ParamsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.ParamsRequest;

            /**
             * Verifies a ParamsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ParamsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ParamsRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.ParamsRequest;

            /**
             * Creates a plain object from a ParamsRequest message. Also converts values to other types if specified.
             * @param message ParamsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.ParamsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ParamsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ParamsResponse. */
        interface IParamsResponse {

            /** ParamsResponse params */
            params?: (gravity.v1.IParams|null);
        }

        /** Represents a ParamsResponse. */
        class ParamsResponse implements IParamsResponse {

            /**
             * Constructs a new ParamsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IParamsResponse);

            /** ParamsResponse params. */
            public params?: (gravity.v1.IParams|null);

            /**
             * Encodes the specified ParamsResponse message. Does not implicitly {@link gravity.v1.ParamsResponse.verify|verify} messages.
             * @param message ParamsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IParamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ParamsResponse message, length delimited. Does not implicitly {@link gravity.v1.ParamsResponse.verify|verify} messages.
             * @param message ParamsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IParamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ParamsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ParamsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.ParamsResponse;

            /**
             * Decodes a ParamsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ParamsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.ParamsResponse;

            /**
             * Verifies a ParamsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ParamsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ParamsResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.ParamsResponse;

            /**
             * Creates a plain object from a ParamsResponse message. Also converts values to other types if specified.
             * @param message ParamsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.ParamsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ParamsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SignerSetTxRequest. */
        interface ISignerSetTxRequest {

            /** SignerSetTxRequest signer_set_nonce */
            signer_set_nonce?: (Long|null);
        }

        /** Represents a SignerSetTxRequest. */
        class SignerSetTxRequest implements ISignerSetTxRequest {

            /**
             * Constructs a new SignerSetTxRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.ISignerSetTxRequest);

            /** SignerSetTxRequest signer_set_nonce. */
            public signer_set_nonce: Long;

            /**
             * Encodes the specified SignerSetTxRequest message. Does not implicitly {@link gravity.v1.SignerSetTxRequest.verify|verify} messages.
             * @param message SignerSetTxRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.ISignerSetTxRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SignerSetTxRequest message, length delimited. Does not implicitly {@link gravity.v1.SignerSetTxRequest.verify|verify} messages.
             * @param message SignerSetTxRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.ISignerSetTxRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SignerSetTxRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SignerSetTxRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.SignerSetTxRequest;

            /**
             * Decodes a SignerSetTxRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SignerSetTxRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.SignerSetTxRequest;

            /**
             * Verifies a SignerSetTxRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SignerSetTxRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SignerSetTxRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.SignerSetTxRequest;

            /**
             * Creates a plain object from a SignerSetTxRequest message. Also converts values to other types if specified.
             * @param message SignerSetTxRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.SignerSetTxRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SignerSetTxRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LatestSignerSetTxRequest. */
        interface ILatestSignerSetTxRequest {
        }

        /** Represents a LatestSignerSetTxRequest. */
        class LatestSignerSetTxRequest implements ILatestSignerSetTxRequest {

            /**
             * Constructs a new LatestSignerSetTxRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.ILatestSignerSetTxRequest);

            /**
             * Encodes the specified LatestSignerSetTxRequest message. Does not implicitly {@link gravity.v1.LatestSignerSetTxRequest.verify|verify} messages.
             * @param message LatestSignerSetTxRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.ILatestSignerSetTxRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LatestSignerSetTxRequest message, length delimited. Does not implicitly {@link gravity.v1.LatestSignerSetTxRequest.verify|verify} messages.
             * @param message LatestSignerSetTxRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.ILatestSignerSetTxRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LatestSignerSetTxRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LatestSignerSetTxRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.LatestSignerSetTxRequest;

            /**
             * Decodes a LatestSignerSetTxRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LatestSignerSetTxRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.LatestSignerSetTxRequest;

            /**
             * Verifies a LatestSignerSetTxRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LatestSignerSetTxRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LatestSignerSetTxRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.LatestSignerSetTxRequest;

            /**
             * Creates a plain object from a LatestSignerSetTxRequest message. Also converts values to other types if specified.
             * @param message LatestSignerSetTxRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.LatestSignerSetTxRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LatestSignerSetTxRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SignerSetTxResponse. */
        interface ISignerSetTxResponse {

            /** SignerSetTxResponse signer_set */
            signer_set?: (gravity.v1.ISignerSetTx|null);
        }

        /** Represents a SignerSetTxResponse. */
        class SignerSetTxResponse implements ISignerSetTxResponse {

            /**
             * Constructs a new SignerSetTxResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.ISignerSetTxResponse);

            /** SignerSetTxResponse signer_set. */
            public signer_set?: (gravity.v1.ISignerSetTx|null);

            /**
             * Encodes the specified SignerSetTxResponse message. Does not implicitly {@link gravity.v1.SignerSetTxResponse.verify|verify} messages.
             * @param message SignerSetTxResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.ISignerSetTxResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SignerSetTxResponse message, length delimited. Does not implicitly {@link gravity.v1.SignerSetTxResponse.verify|verify} messages.
             * @param message SignerSetTxResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.ISignerSetTxResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SignerSetTxResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SignerSetTxResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.SignerSetTxResponse;

            /**
             * Decodes a SignerSetTxResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SignerSetTxResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.SignerSetTxResponse;

            /**
             * Verifies a SignerSetTxResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SignerSetTxResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SignerSetTxResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.SignerSetTxResponse;

            /**
             * Creates a plain object from a SignerSetTxResponse message. Also converts values to other types if specified.
             * @param message SignerSetTxResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.SignerSetTxResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SignerSetTxResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BatchTxRequest. */
        interface IBatchTxRequest {

            /** BatchTxRequest token_contract */
            token_contract?: (string|null);

            /** BatchTxRequest batch_nonce */
            batch_nonce?: (Long|null);
        }

        /** Represents a BatchTxRequest. */
        class BatchTxRequest implements IBatchTxRequest {

            /**
             * Constructs a new BatchTxRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IBatchTxRequest);

            /** BatchTxRequest token_contract. */
            public token_contract: string;

            /** BatchTxRequest batch_nonce. */
            public batch_nonce: Long;

            /**
             * Encodes the specified BatchTxRequest message. Does not implicitly {@link gravity.v1.BatchTxRequest.verify|verify} messages.
             * @param message BatchTxRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IBatchTxRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchTxRequest message, length delimited. Does not implicitly {@link gravity.v1.BatchTxRequest.verify|verify} messages.
             * @param message BatchTxRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IBatchTxRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchTxRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchTxRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.BatchTxRequest;

            /**
             * Decodes a BatchTxRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchTxRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.BatchTxRequest;

            /**
             * Verifies a BatchTxRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchTxRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchTxRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.BatchTxRequest;

            /**
             * Creates a plain object from a BatchTxRequest message. Also converts values to other types if specified.
             * @param message BatchTxRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.BatchTxRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchTxRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BatchTxResponse. */
        interface IBatchTxResponse {

            /** BatchTxResponse batch */
            batch?: (gravity.v1.IBatchTx|null);
        }

        /** Represents a BatchTxResponse. */
        class BatchTxResponse implements IBatchTxResponse {

            /**
             * Constructs a new BatchTxResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IBatchTxResponse);

            /** BatchTxResponse batch. */
            public batch?: (gravity.v1.IBatchTx|null);

            /**
             * Encodes the specified BatchTxResponse message. Does not implicitly {@link gravity.v1.BatchTxResponse.verify|verify} messages.
             * @param message BatchTxResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IBatchTxResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchTxResponse message, length delimited. Does not implicitly {@link gravity.v1.BatchTxResponse.verify|verify} messages.
             * @param message BatchTxResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IBatchTxResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchTxResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchTxResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.BatchTxResponse;

            /**
             * Decodes a BatchTxResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchTxResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.BatchTxResponse;

            /**
             * Verifies a BatchTxResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchTxResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchTxResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.BatchTxResponse;

            /**
             * Creates a plain object from a BatchTxResponse message. Also converts values to other types if specified.
             * @param message BatchTxResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.BatchTxResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchTxResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ContractCallTxRequest. */
        interface IContractCallTxRequest {

            /** ContractCallTxRequest invalidation_scope */
            invalidation_scope?: (Uint8Array|null);

            /** ContractCallTxRequest invalidation_nonce */
            invalidation_nonce?: (Long|null);
        }

        /** Represents a ContractCallTxRequest. */
        class ContractCallTxRequest implements IContractCallTxRequest {

            /**
             * Constructs a new ContractCallTxRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IContractCallTxRequest);

            /** ContractCallTxRequest invalidation_scope. */
            public invalidation_scope: Uint8Array;

            /** ContractCallTxRequest invalidation_nonce. */
            public invalidation_nonce: Long;

            /**
             * Encodes the specified ContractCallTxRequest message. Does not implicitly {@link gravity.v1.ContractCallTxRequest.verify|verify} messages.
             * @param message ContractCallTxRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IContractCallTxRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ContractCallTxRequest message, length delimited. Does not implicitly {@link gravity.v1.ContractCallTxRequest.verify|verify} messages.
             * @param message ContractCallTxRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IContractCallTxRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ContractCallTxRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ContractCallTxRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.ContractCallTxRequest;

            /**
             * Decodes a ContractCallTxRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ContractCallTxRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.ContractCallTxRequest;

            /**
             * Verifies a ContractCallTxRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ContractCallTxRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ContractCallTxRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.ContractCallTxRequest;

            /**
             * Creates a plain object from a ContractCallTxRequest message. Also converts values to other types if specified.
             * @param message ContractCallTxRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.ContractCallTxRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ContractCallTxRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ContractCallTxResponse. */
        interface IContractCallTxResponse {

            /** ContractCallTxResponse logic_call */
            logic_call?: (gravity.v1.IContractCallTx|null);
        }

        /** Represents a ContractCallTxResponse. */
        class ContractCallTxResponse implements IContractCallTxResponse {

            /**
             * Constructs a new ContractCallTxResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IContractCallTxResponse);

            /** ContractCallTxResponse logic_call. */
            public logic_call?: (gravity.v1.IContractCallTx|null);

            /**
             * Encodes the specified ContractCallTxResponse message. Does not implicitly {@link gravity.v1.ContractCallTxResponse.verify|verify} messages.
             * @param message ContractCallTxResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IContractCallTxResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ContractCallTxResponse message, length delimited. Does not implicitly {@link gravity.v1.ContractCallTxResponse.verify|verify} messages.
             * @param message ContractCallTxResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IContractCallTxResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ContractCallTxResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ContractCallTxResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.ContractCallTxResponse;

            /**
             * Decodes a ContractCallTxResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ContractCallTxResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.ContractCallTxResponse;

            /**
             * Verifies a ContractCallTxResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ContractCallTxResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ContractCallTxResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.ContractCallTxResponse;

            /**
             * Creates a plain object from a ContractCallTxResponse message. Also converts values to other types if specified.
             * @param message ContractCallTxResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.ContractCallTxResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ContractCallTxResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SignerSetTxConfirmationsRequest. */
        interface ISignerSetTxConfirmationsRequest {

            /** SignerSetTxConfirmationsRequest signer_set_nonce */
            signer_set_nonce?: (Long|null);
        }

        /** Represents a SignerSetTxConfirmationsRequest. */
        class SignerSetTxConfirmationsRequest implements ISignerSetTxConfirmationsRequest {

            /**
             * Constructs a new SignerSetTxConfirmationsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.ISignerSetTxConfirmationsRequest);

            /** SignerSetTxConfirmationsRequest signer_set_nonce. */
            public signer_set_nonce: Long;

            /**
             * Encodes the specified SignerSetTxConfirmationsRequest message. Does not implicitly {@link gravity.v1.SignerSetTxConfirmationsRequest.verify|verify} messages.
             * @param message SignerSetTxConfirmationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.ISignerSetTxConfirmationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SignerSetTxConfirmationsRequest message, length delimited. Does not implicitly {@link gravity.v1.SignerSetTxConfirmationsRequest.verify|verify} messages.
             * @param message SignerSetTxConfirmationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.ISignerSetTxConfirmationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SignerSetTxConfirmationsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SignerSetTxConfirmationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.SignerSetTxConfirmationsRequest;

            /**
             * Decodes a SignerSetTxConfirmationsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SignerSetTxConfirmationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.SignerSetTxConfirmationsRequest;

            /**
             * Verifies a SignerSetTxConfirmationsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SignerSetTxConfirmationsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SignerSetTxConfirmationsRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.SignerSetTxConfirmationsRequest;

            /**
             * Creates a plain object from a SignerSetTxConfirmationsRequest message. Also converts values to other types if specified.
             * @param message SignerSetTxConfirmationsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.SignerSetTxConfirmationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SignerSetTxConfirmationsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SignerSetTxConfirmationsResponse. */
        interface ISignerSetTxConfirmationsResponse {

            /** SignerSetTxConfirmationsResponse signatures */
            signatures?: (gravity.v1.ISignerSetTxConfirmation[]|null);
        }

        /** Represents a SignerSetTxConfirmationsResponse. */
        class SignerSetTxConfirmationsResponse implements ISignerSetTxConfirmationsResponse {

            /**
             * Constructs a new SignerSetTxConfirmationsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.ISignerSetTxConfirmationsResponse);

            /** SignerSetTxConfirmationsResponse signatures. */
            public signatures: gravity.v1.ISignerSetTxConfirmation[];

            /**
             * Encodes the specified SignerSetTxConfirmationsResponse message. Does not implicitly {@link gravity.v1.SignerSetTxConfirmationsResponse.verify|verify} messages.
             * @param message SignerSetTxConfirmationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.ISignerSetTxConfirmationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SignerSetTxConfirmationsResponse message, length delimited. Does not implicitly {@link gravity.v1.SignerSetTxConfirmationsResponse.verify|verify} messages.
             * @param message SignerSetTxConfirmationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.ISignerSetTxConfirmationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SignerSetTxConfirmationsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SignerSetTxConfirmationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.SignerSetTxConfirmationsResponse;

            /**
             * Decodes a SignerSetTxConfirmationsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SignerSetTxConfirmationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.SignerSetTxConfirmationsResponse;

            /**
             * Verifies a SignerSetTxConfirmationsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SignerSetTxConfirmationsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SignerSetTxConfirmationsResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.SignerSetTxConfirmationsResponse;

            /**
             * Creates a plain object from a SignerSetTxConfirmationsResponse message. Also converts values to other types if specified.
             * @param message SignerSetTxConfirmationsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.SignerSetTxConfirmationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SignerSetTxConfirmationsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SignerSetTxsRequest. */
        interface ISignerSetTxsRequest {

            /** SignerSetTxsRequest pagination */
            pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);
        }

        /** Represents a SignerSetTxsRequest. */
        class SignerSetTxsRequest implements ISignerSetTxsRequest {

            /**
             * Constructs a new SignerSetTxsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.ISignerSetTxsRequest);

            /** SignerSetTxsRequest pagination. */
            public pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);

            /**
             * Encodes the specified SignerSetTxsRequest message. Does not implicitly {@link gravity.v1.SignerSetTxsRequest.verify|verify} messages.
             * @param message SignerSetTxsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.ISignerSetTxsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SignerSetTxsRequest message, length delimited. Does not implicitly {@link gravity.v1.SignerSetTxsRequest.verify|verify} messages.
             * @param message SignerSetTxsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.ISignerSetTxsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SignerSetTxsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SignerSetTxsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.SignerSetTxsRequest;

            /**
             * Decodes a SignerSetTxsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SignerSetTxsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.SignerSetTxsRequest;

            /**
             * Verifies a SignerSetTxsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SignerSetTxsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SignerSetTxsRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.SignerSetTxsRequest;

            /**
             * Creates a plain object from a SignerSetTxsRequest message. Also converts values to other types if specified.
             * @param message SignerSetTxsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.SignerSetTxsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SignerSetTxsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SignerSetTxsResponse. */
        interface ISignerSetTxsResponse {

            /** SignerSetTxsResponse signer_sets */
            signer_sets?: (gravity.v1.ISignerSetTx[]|null);

            /** SignerSetTxsResponse pagination */
            pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);
        }

        /** Represents a SignerSetTxsResponse. */
        class SignerSetTxsResponse implements ISignerSetTxsResponse {

            /**
             * Constructs a new SignerSetTxsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.ISignerSetTxsResponse);

            /** SignerSetTxsResponse signer_sets. */
            public signer_sets: gravity.v1.ISignerSetTx[];

            /** SignerSetTxsResponse pagination. */
            public pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);

            /**
             * Encodes the specified SignerSetTxsResponse message. Does not implicitly {@link gravity.v1.SignerSetTxsResponse.verify|verify} messages.
             * @param message SignerSetTxsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.ISignerSetTxsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SignerSetTxsResponse message, length delimited. Does not implicitly {@link gravity.v1.SignerSetTxsResponse.verify|verify} messages.
             * @param message SignerSetTxsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.ISignerSetTxsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SignerSetTxsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SignerSetTxsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.SignerSetTxsResponse;

            /**
             * Decodes a SignerSetTxsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SignerSetTxsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.SignerSetTxsResponse;

            /**
             * Verifies a SignerSetTxsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SignerSetTxsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SignerSetTxsResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.SignerSetTxsResponse;

            /**
             * Creates a plain object from a SignerSetTxsResponse message. Also converts values to other types if specified.
             * @param message SignerSetTxsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.SignerSetTxsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SignerSetTxsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BatchTxsRequest. */
        interface IBatchTxsRequest {

            /** BatchTxsRequest pagination */
            pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);
        }

        /** Represents a BatchTxsRequest. */
        class BatchTxsRequest implements IBatchTxsRequest {

            /**
             * Constructs a new BatchTxsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IBatchTxsRequest);

            /** BatchTxsRequest pagination. */
            public pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);

            /**
             * Encodes the specified BatchTxsRequest message. Does not implicitly {@link gravity.v1.BatchTxsRequest.verify|verify} messages.
             * @param message BatchTxsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IBatchTxsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchTxsRequest message, length delimited. Does not implicitly {@link gravity.v1.BatchTxsRequest.verify|verify} messages.
             * @param message BatchTxsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IBatchTxsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchTxsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchTxsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.BatchTxsRequest;

            /**
             * Decodes a BatchTxsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchTxsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.BatchTxsRequest;

            /**
             * Verifies a BatchTxsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchTxsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchTxsRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.BatchTxsRequest;

            /**
             * Creates a plain object from a BatchTxsRequest message. Also converts values to other types if specified.
             * @param message BatchTxsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.BatchTxsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchTxsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BatchTxsResponse. */
        interface IBatchTxsResponse {

            /** BatchTxsResponse batches */
            batches?: (gravity.v1.IBatchTx[]|null);

            /** BatchTxsResponse pagination */
            pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);
        }

        /** Represents a BatchTxsResponse. */
        class BatchTxsResponse implements IBatchTxsResponse {

            /**
             * Constructs a new BatchTxsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IBatchTxsResponse);

            /** BatchTxsResponse batches. */
            public batches: gravity.v1.IBatchTx[];

            /** BatchTxsResponse pagination. */
            public pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);

            /**
             * Encodes the specified BatchTxsResponse message. Does not implicitly {@link gravity.v1.BatchTxsResponse.verify|verify} messages.
             * @param message BatchTxsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IBatchTxsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchTxsResponse message, length delimited. Does not implicitly {@link gravity.v1.BatchTxsResponse.verify|verify} messages.
             * @param message BatchTxsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IBatchTxsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchTxsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchTxsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.BatchTxsResponse;

            /**
             * Decodes a BatchTxsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchTxsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.BatchTxsResponse;

            /**
             * Verifies a BatchTxsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchTxsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchTxsResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.BatchTxsResponse;

            /**
             * Creates a plain object from a BatchTxsResponse message. Also converts values to other types if specified.
             * @param message BatchTxsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.BatchTxsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchTxsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ContractCallTxsRequest. */
        interface IContractCallTxsRequest {

            /** ContractCallTxsRequest pagination */
            pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);
        }

        /** Represents a ContractCallTxsRequest. */
        class ContractCallTxsRequest implements IContractCallTxsRequest {

            /**
             * Constructs a new ContractCallTxsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IContractCallTxsRequest);

            /** ContractCallTxsRequest pagination. */
            public pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);

            /**
             * Encodes the specified ContractCallTxsRequest message. Does not implicitly {@link gravity.v1.ContractCallTxsRequest.verify|verify} messages.
             * @param message ContractCallTxsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IContractCallTxsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ContractCallTxsRequest message, length delimited. Does not implicitly {@link gravity.v1.ContractCallTxsRequest.verify|verify} messages.
             * @param message ContractCallTxsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IContractCallTxsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ContractCallTxsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ContractCallTxsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.ContractCallTxsRequest;

            /**
             * Decodes a ContractCallTxsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ContractCallTxsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.ContractCallTxsRequest;

            /**
             * Verifies a ContractCallTxsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ContractCallTxsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ContractCallTxsRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.ContractCallTxsRequest;

            /**
             * Creates a plain object from a ContractCallTxsRequest message. Also converts values to other types if specified.
             * @param message ContractCallTxsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.ContractCallTxsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ContractCallTxsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ContractCallTxsResponse. */
        interface IContractCallTxsResponse {

            /** ContractCallTxsResponse calls */
            calls?: (gravity.v1.IContractCallTx[]|null);

            /** ContractCallTxsResponse pagination */
            pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);
        }

        /** Represents a ContractCallTxsResponse. */
        class ContractCallTxsResponse implements IContractCallTxsResponse {

            /**
             * Constructs a new ContractCallTxsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IContractCallTxsResponse);

            /** ContractCallTxsResponse calls. */
            public calls: gravity.v1.IContractCallTx[];

            /** ContractCallTxsResponse pagination. */
            public pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);

            /**
             * Encodes the specified ContractCallTxsResponse message. Does not implicitly {@link gravity.v1.ContractCallTxsResponse.verify|verify} messages.
             * @param message ContractCallTxsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IContractCallTxsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ContractCallTxsResponse message, length delimited. Does not implicitly {@link gravity.v1.ContractCallTxsResponse.verify|verify} messages.
             * @param message ContractCallTxsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IContractCallTxsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ContractCallTxsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ContractCallTxsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.ContractCallTxsResponse;

            /**
             * Decodes a ContractCallTxsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ContractCallTxsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.ContractCallTxsResponse;

            /**
             * Verifies a ContractCallTxsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ContractCallTxsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ContractCallTxsResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.ContractCallTxsResponse;

            /**
             * Creates a plain object from a ContractCallTxsResponse message. Also converts values to other types if specified.
             * @param message ContractCallTxsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.ContractCallTxsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ContractCallTxsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UnsignedSignerSetTxsRequest. */
        interface IUnsignedSignerSetTxsRequest {

            /** UnsignedSignerSetTxsRequest address */
            address?: (string|null);
        }

        /** Represents an UnsignedSignerSetTxsRequest. */
        class UnsignedSignerSetTxsRequest implements IUnsignedSignerSetTxsRequest {

            /**
             * Constructs a new UnsignedSignerSetTxsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IUnsignedSignerSetTxsRequest);

            /** UnsignedSignerSetTxsRequest address. */
            public address: string;

            /**
             * Encodes the specified UnsignedSignerSetTxsRequest message. Does not implicitly {@link gravity.v1.UnsignedSignerSetTxsRequest.verify|verify} messages.
             * @param message UnsignedSignerSetTxsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IUnsignedSignerSetTxsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UnsignedSignerSetTxsRequest message, length delimited. Does not implicitly {@link gravity.v1.UnsignedSignerSetTxsRequest.verify|verify} messages.
             * @param message UnsignedSignerSetTxsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IUnsignedSignerSetTxsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UnsignedSignerSetTxsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UnsignedSignerSetTxsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.UnsignedSignerSetTxsRequest;

            /**
             * Decodes an UnsignedSignerSetTxsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UnsignedSignerSetTxsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.UnsignedSignerSetTxsRequest;

            /**
             * Verifies an UnsignedSignerSetTxsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UnsignedSignerSetTxsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UnsignedSignerSetTxsRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.UnsignedSignerSetTxsRequest;

            /**
             * Creates a plain object from an UnsignedSignerSetTxsRequest message. Also converts values to other types if specified.
             * @param message UnsignedSignerSetTxsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.UnsignedSignerSetTxsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UnsignedSignerSetTxsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UnsignedSignerSetTxsResponse. */
        interface IUnsignedSignerSetTxsResponse {

            /** UnsignedSignerSetTxsResponse signer_sets */
            signer_sets?: (gravity.v1.ISignerSetTx[]|null);
        }

        /** Represents an UnsignedSignerSetTxsResponse. */
        class UnsignedSignerSetTxsResponse implements IUnsignedSignerSetTxsResponse {

            /**
             * Constructs a new UnsignedSignerSetTxsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IUnsignedSignerSetTxsResponse);

            /** UnsignedSignerSetTxsResponse signer_sets. */
            public signer_sets: gravity.v1.ISignerSetTx[];

            /**
             * Encodes the specified UnsignedSignerSetTxsResponse message. Does not implicitly {@link gravity.v1.UnsignedSignerSetTxsResponse.verify|verify} messages.
             * @param message UnsignedSignerSetTxsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IUnsignedSignerSetTxsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UnsignedSignerSetTxsResponse message, length delimited. Does not implicitly {@link gravity.v1.UnsignedSignerSetTxsResponse.verify|verify} messages.
             * @param message UnsignedSignerSetTxsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IUnsignedSignerSetTxsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UnsignedSignerSetTxsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UnsignedSignerSetTxsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.UnsignedSignerSetTxsResponse;

            /**
             * Decodes an UnsignedSignerSetTxsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UnsignedSignerSetTxsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.UnsignedSignerSetTxsResponse;

            /**
             * Verifies an UnsignedSignerSetTxsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UnsignedSignerSetTxsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UnsignedSignerSetTxsResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.UnsignedSignerSetTxsResponse;

            /**
             * Creates a plain object from an UnsignedSignerSetTxsResponse message. Also converts values to other types if specified.
             * @param message UnsignedSignerSetTxsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.UnsignedSignerSetTxsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UnsignedSignerSetTxsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UnsignedBatchTxsRequest. */
        interface IUnsignedBatchTxsRequest {

            /** UnsignedBatchTxsRequest address */
            address?: (string|null);
        }

        /** Represents an UnsignedBatchTxsRequest. */
        class UnsignedBatchTxsRequest implements IUnsignedBatchTxsRequest {

            /**
             * Constructs a new UnsignedBatchTxsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IUnsignedBatchTxsRequest);

            /** UnsignedBatchTxsRequest address. */
            public address: string;

            /**
             * Encodes the specified UnsignedBatchTxsRequest message. Does not implicitly {@link gravity.v1.UnsignedBatchTxsRequest.verify|verify} messages.
             * @param message UnsignedBatchTxsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IUnsignedBatchTxsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UnsignedBatchTxsRequest message, length delimited. Does not implicitly {@link gravity.v1.UnsignedBatchTxsRequest.verify|verify} messages.
             * @param message UnsignedBatchTxsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IUnsignedBatchTxsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UnsignedBatchTxsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UnsignedBatchTxsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.UnsignedBatchTxsRequest;

            /**
             * Decodes an UnsignedBatchTxsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UnsignedBatchTxsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.UnsignedBatchTxsRequest;

            /**
             * Verifies an UnsignedBatchTxsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UnsignedBatchTxsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UnsignedBatchTxsRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.UnsignedBatchTxsRequest;

            /**
             * Creates a plain object from an UnsignedBatchTxsRequest message. Also converts values to other types if specified.
             * @param message UnsignedBatchTxsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.UnsignedBatchTxsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UnsignedBatchTxsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UnsignedBatchTxsResponse. */
        interface IUnsignedBatchTxsResponse {

            /** UnsignedBatchTxsResponse batches */
            batches?: (gravity.v1.IBatchTx[]|null);
        }

        /** Represents an UnsignedBatchTxsResponse. */
        class UnsignedBatchTxsResponse implements IUnsignedBatchTxsResponse {

            /**
             * Constructs a new UnsignedBatchTxsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IUnsignedBatchTxsResponse);

            /** UnsignedBatchTxsResponse batches. */
            public batches: gravity.v1.IBatchTx[];

            /**
             * Encodes the specified UnsignedBatchTxsResponse message. Does not implicitly {@link gravity.v1.UnsignedBatchTxsResponse.verify|verify} messages.
             * @param message UnsignedBatchTxsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IUnsignedBatchTxsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UnsignedBatchTxsResponse message, length delimited. Does not implicitly {@link gravity.v1.UnsignedBatchTxsResponse.verify|verify} messages.
             * @param message UnsignedBatchTxsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IUnsignedBatchTxsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UnsignedBatchTxsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UnsignedBatchTxsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.UnsignedBatchTxsResponse;

            /**
             * Decodes an UnsignedBatchTxsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UnsignedBatchTxsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.UnsignedBatchTxsResponse;

            /**
             * Verifies an UnsignedBatchTxsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UnsignedBatchTxsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UnsignedBatchTxsResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.UnsignedBatchTxsResponse;

            /**
             * Creates a plain object from an UnsignedBatchTxsResponse message. Also converts values to other types if specified.
             * @param message UnsignedBatchTxsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.UnsignedBatchTxsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UnsignedBatchTxsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UnsignedContractCallTxsRequest. */
        interface IUnsignedContractCallTxsRequest {

            /** UnsignedContractCallTxsRequest address */
            address?: (string|null);
        }

        /** Represents an UnsignedContractCallTxsRequest. */
        class UnsignedContractCallTxsRequest implements IUnsignedContractCallTxsRequest {

            /**
             * Constructs a new UnsignedContractCallTxsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IUnsignedContractCallTxsRequest);

            /** UnsignedContractCallTxsRequest address. */
            public address: string;

            /**
             * Encodes the specified UnsignedContractCallTxsRequest message. Does not implicitly {@link gravity.v1.UnsignedContractCallTxsRequest.verify|verify} messages.
             * @param message UnsignedContractCallTxsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IUnsignedContractCallTxsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UnsignedContractCallTxsRequest message, length delimited. Does not implicitly {@link gravity.v1.UnsignedContractCallTxsRequest.verify|verify} messages.
             * @param message UnsignedContractCallTxsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IUnsignedContractCallTxsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UnsignedContractCallTxsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UnsignedContractCallTxsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.UnsignedContractCallTxsRequest;

            /**
             * Decodes an UnsignedContractCallTxsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UnsignedContractCallTxsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.UnsignedContractCallTxsRequest;

            /**
             * Verifies an UnsignedContractCallTxsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UnsignedContractCallTxsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UnsignedContractCallTxsRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.UnsignedContractCallTxsRequest;

            /**
             * Creates a plain object from an UnsignedContractCallTxsRequest message. Also converts values to other types if specified.
             * @param message UnsignedContractCallTxsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.UnsignedContractCallTxsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UnsignedContractCallTxsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UnsignedContractCallTxsResponse. */
        interface IUnsignedContractCallTxsResponse {

            /** UnsignedContractCallTxsResponse calls */
            calls?: (gravity.v1.IContractCallTx[]|null);
        }

        /** Represents an UnsignedContractCallTxsResponse. */
        class UnsignedContractCallTxsResponse implements IUnsignedContractCallTxsResponse {

            /**
             * Constructs a new UnsignedContractCallTxsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IUnsignedContractCallTxsResponse);

            /** UnsignedContractCallTxsResponse calls. */
            public calls: gravity.v1.IContractCallTx[];

            /**
             * Encodes the specified UnsignedContractCallTxsResponse message. Does not implicitly {@link gravity.v1.UnsignedContractCallTxsResponse.verify|verify} messages.
             * @param message UnsignedContractCallTxsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IUnsignedContractCallTxsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UnsignedContractCallTxsResponse message, length delimited. Does not implicitly {@link gravity.v1.UnsignedContractCallTxsResponse.verify|verify} messages.
             * @param message UnsignedContractCallTxsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IUnsignedContractCallTxsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UnsignedContractCallTxsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UnsignedContractCallTxsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.UnsignedContractCallTxsResponse;

            /**
             * Decodes an UnsignedContractCallTxsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UnsignedContractCallTxsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.UnsignedContractCallTxsResponse;

            /**
             * Verifies an UnsignedContractCallTxsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UnsignedContractCallTxsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UnsignedContractCallTxsResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.UnsignedContractCallTxsResponse;

            /**
             * Creates a plain object from an UnsignedContractCallTxsResponse message. Also converts values to other types if specified.
             * @param message UnsignedContractCallTxsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.UnsignedContractCallTxsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UnsignedContractCallTxsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BatchTxFeesRequest. */
        interface IBatchTxFeesRequest {
        }

        /** Represents a BatchTxFeesRequest. */
        class BatchTxFeesRequest implements IBatchTxFeesRequest {

            /**
             * Constructs a new BatchTxFeesRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IBatchTxFeesRequest);

            /**
             * Encodes the specified BatchTxFeesRequest message. Does not implicitly {@link gravity.v1.BatchTxFeesRequest.verify|verify} messages.
             * @param message BatchTxFeesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IBatchTxFeesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchTxFeesRequest message, length delimited. Does not implicitly {@link gravity.v1.BatchTxFeesRequest.verify|verify} messages.
             * @param message BatchTxFeesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IBatchTxFeesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchTxFeesRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchTxFeesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.BatchTxFeesRequest;

            /**
             * Decodes a BatchTxFeesRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchTxFeesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.BatchTxFeesRequest;

            /**
             * Verifies a BatchTxFeesRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchTxFeesRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchTxFeesRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.BatchTxFeesRequest;

            /**
             * Creates a plain object from a BatchTxFeesRequest message. Also converts values to other types if specified.
             * @param message BatchTxFeesRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.BatchTxFeesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchTxFeesRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BatchTxFeesResponse. */
        interface IBatchTxFeesResponse {

            /** BatchTxFeesResponse fees */
            fees?: (cosmos.base.v1beta1.ICoin[]|null);
        }

        /** Represents a BatchTxFeesResponse. */
        class BatchTxFeesResponse implements IBatchTxFeesResponse {

            /**
             * Constructs a new BatchTxFeesResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IBatchTxFeesResponse);

            /** BatchTxFeesResponse fees. */
            public fees: cosmos.base.v1beta1.ICoin[];

            /**
             * Encodes the specified BatchTxFeesResponse message. Does not implicitly {@link gravity.v1.BatchTxFeesResponse.verify|verify} messages.
             * @param message BatchTxFeesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IBatchTxFeesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchTxFeesResponse message, length delimited. Does not implicitly {@link gravity.v1.BatchTxFeesResponse.verify|verify} messages.
             * @param message BatchTxFeesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IBatchTxFeesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchTxFeesResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchTxFeesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.BatchTxFeesResponse;

            /**
             * Decodes a BatchTxFeesResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchTxFeesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.BatchTxFeesResponse;

            /**
             * Verifies a BatchTxFeesResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchTxFeesResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchTxFeesResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.BatchTxFeesResponse;

            /**
             * Creates a plain object from a BatchTxFeesResponse message. Also converts values to other types if specified.
             * @param message BatchTxFeesResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.BatchTxFeesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchTxFeesResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ContractCallTxConfirmationsRequest. */
        interface IContractCallTxConfirmationsRequest {

            /** ContractCallTxConfirmationsRequest invalidation_scope */
            invalidation_scope?: (Uint8Array|null);

            /** ContractCallTxConfirmationsRequest invalidation_nonce */
            invalidation_nonce?: (Long|null);
        }

        /** Represents a ContractCallTxConfirmationsRequest. */
        class ContractCallTxConfirmationsRequest implements IContractCallTxConfirmationsRequest {

            /**
             * Constructs a new ContractCallTxConfirmationsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IContractCallTxConfirmationsRequest);

            /** ContractCallTxConfirmationsRequest invalidation_scope. */
            public invalidation_scope: Uint8Array;

            /** ContractCallTxConfirmationsRequest invalidation_nonce. */
            public invalidation_nonce: Long;

            /**
             * Encodes the specified ContractCallTxConfirmationsRequest message. Does not implicitly {@link gravity.v1.ContractCallTxConfirmationsRequest.verify|verify} messages.
             * @param message ContractCallTxConfirmationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IContractCallTxConfirmationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ContractCallTxConfirmationsRequest message, length delimited. Does not implicitly {@link gravity.v1.ContractCallTxConfirmationsRequest.verify|verify} messages.
             * @param message ContractCallTxConfirmationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IContractCallTxConfirmationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ContractCallTxConfirmationsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ContractCallTxConfirmationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.ContractCallTxConfirmationsRequest;

            /**
             * Decodes a ContractCallTxConfirmationsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ContractCallTxConfirmationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.ContractCallTxConfirmationsRequest;

            /**
             * Verifies a ContractCallTxConfirmationsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ContractCallTxConfirmationsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ContractCallTxConfirmationsRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.ContractCallTxConfirmationsRequest;

            /**
             * Creates a plain object from a ContractCallTxConfirmationsRequest message. Also converts values to other types if specified.
             * @param message ContractCallTxConfirmationsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.ContractCallTxConfirmationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ContractCallTxConfirmationsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ContractCallTxConfirmationsResponse. */
        interface IContractCallTxConfirmationsResponse {

            /** ContractCallTxConfirmationsResponse signatures */
            signatures?: (gravity.v1.IContractCallTxConfirmation[]|null);
        }

        /** Represents a ContractCallTxConfirmationsResponse. */
        class ContractCallTxConfirmationsResponse implements IContractCallTxConfirmationsResponse {

            /**
             * Constructs a new ContractCallTxConfirmationsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IContractCallTxConfirmationsResponse);

            /** ContractCallTxConfirmationsResponse signatures. */
            public signatures: gravity.v1.IContractCallTxConfirmation[];

            /**
             * Encodes the specified ContractCallTxConfirmationsResponse message. Does not implicitly {@link gravity.v1.ContractCallTxConfirmationsResponse.verify|verify} messages.
             * @param message ContractCallTxConfirmationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IContractCallTxConfirmationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ContractCallTxConfirmationsResponse message, length delimited. Does not implicitly {@link gravity.v1.ContractCallTxConfirmationsResponse.verify|verify} messages.
             * @param message ContractCallTxConfirmationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IContractCallTxConfirmationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ContractCallTxConfirmationsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ContractCallTxConfirmationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.ContractCallTxConfirmationsResponse;

            /**
             * Decodes a ContractCallTxConfirmationsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ContractCallTxConfirmationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.ContractCallTxConfirmationsResponse;

            /**
             * Verifies a ContractCallTxConfirmationsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ContractCallTxConfirmationsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ContractCallTxConfirmationsResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.ContractCallTxConfirmationsResponse;

            /**
             * Creates a plain object from a ContractCallTxConfirmationsResponse message. Also converts values to other types if specified.
             * @param message ContractCallTxConfirmationsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.ContractCallTxConfirmationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ContractCallTxConfirmationsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BatchTxConfirmationsRequest. */
        interface IBatchTxConfirmationsRequest {

            /** BatchTxConfirmationsRequest batch_nonce */
            batch_nonce?: (Long|null);

            /** BatchTxConfirmationsRequest token_contract */
            token_contract?: (string|null);
        }

        /** Represents a BatchTxConfirmationsRequest. */
        class BatchTxConfirmationsRequest implements IBatchTxConfirmationsRequest {

            /**
             * Constructs a new BatchTxConfirmationsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IBatchTxConfirmationsRequest);

            /** BatchTxConfirmationsRequest batch_nonce. */
            public batch_nonce: Long;

            /** BatchTxConfirmationsRequest token_contract. */
            public token_contract: string;

            /**
             * Encodes the specified BatchTxConfirmationsRequest message. Does not implicitly {@link gravity.v1.BatchTxConfirmationsRequest.verify|verify} messages.
             * @param message BatchTxConfirmationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IBatchTxConfirmationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchTxConfirmationsRequest message, length delimited. Does not implicitly {@link gravity.v1.BatchTxConfirmationsRequest.verify|verify} messages.
             * @param message BatchTxConfirmationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IBatchTxConfirmationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchTxConfirmationsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchTxConfirmationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.BatchTxConfirmationsRequest;

            /**
             * Decodes a BatchTxConfirmationsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchTxConfirmationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.BatchTxConfirmationsRequest;

            /**
             * Verifies a BatchTxConfirmationsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchTxConfirmationsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchTxConfirmationsRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.BatchTxConfirmationsRequest;

            /**
             * Creates a plain object from a BatchTxConfirmationsRequest message. Also converts values to other types if specified.
             * @param message BatchTxConfirmationsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.BatchTxConfirmationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchTxConfirmationsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BatchTxConfirmationsResponse. */
        interface IBatchTxConfirmationsResponse {

            /** BatchTxConfirmationsResponse signatures */
            signatures?: (gravity.v1.IBatchTxConfirmation[]|null);
        }

        /** Represents a BatchTxConfirmationsResponse. */
        class BatchTxConfirmationsResponse implements IBatchTxConfirmationsResponse {

            /**
             * Constructs a new BatchTxConfirmationsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IBatchTxConfirmationsResponse);

            /** BatchTxConfirmationsResponse signatures. */
            public signatures: gravity.v1.IBatchTxConfirmation[];

            /**
             * Encodes the specified BatchTxConfirmationsResponse message. Does not implicitly {@link gravity.v1.BatchTxConfirmationsResponse.verify|verify} messages.
             * @param message BatchTxConfirmationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IBatchTxConfirmationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchTxConfirmationsResponse message, length delimited. Does not implicitly {@link gravity.v1.BatchTxConfirmationsResponse.verify|verify} messages.
             * @param message BatchTxConfirmationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IBatchTxConfirmationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchTxConfirmationsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchTxConfirmationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.BatchTxConfirmationsResponse;

            /**
             * Decodes a BatchTxConfirmationsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchTxConfirmationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.BatchTxConfirmationsResponse;

            /**
             * Verifies a BatchTxConfirmationsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchTxConfirmationsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchTxConfirmationsResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.BatchTxConfirmationsResponse;

            /**
             * Creates a plain object from a BatchTxConfirmationsResponse message. Also converts values to other types if specified.
             * @param message BatchTxConfirmationsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.BatchTxConfirmationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchTxConfirmationsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LastSubmittedEthereumEventRequest. */
        interface ILastSubmittedEthereumEventRequest {

            /** LastSubmittedEthereumEventRequest address */
            address?: (string|null);
        }

        /** Represents a LastSubmittedEthereumEventRequest. */
        class LastSubmittedEthereumEventRequest implements ILastSubmittedEthereumEventRequest {

            /**
             * Constructs a new LastSubmittedEthereumEventRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.ILastSubmittedEthereumEventRequest);

            /** LastSubmittedEthereumEventRequest address. */
            public address: string;

            /**
             * Encodes the specified LastSubmittedEthereumEventRequest message. Does not implicitly {@link gravity.v1.LastSubmittedEthereumEventRequest.verify|verify} messages.
             * @param message LastSubmittedEthereumEventRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.ILastSubmittedEthereumEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LastSubmittedEthereumEventRequest message, length delimited. Does not implicitly {@link gravity.v1.LastSubmittedEthereumEventRequest.verify|verify} messages.
             * @param message LastSubmittedEthereumEventRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.ILastSubmittedEthereumEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LastSubmittedEthereumEventRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LastSubmittedEthereumEventRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.LastSubmittedEthereumEventRequest;

            /**
             * Decodes a LastSubmittedEthereumEventRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LastSubmittedEthereumEventRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.LastSubmittedEthereumEventRequest;

            /**
             * Verifies a LastSubmittedEthereumEventRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LastSubmittedEthereumEventRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LastSubmittedEthereumEventRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.LastSubmittedEthereumEventRequest;

            /**
             * Creates a plain object from a LastSubmittedEthereumEventRequest message. Also converts values to other types if specified.
             * @param message LastSubmittedEthereumEventRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.LastSubmittedEthereumEventRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LastSubmittedEthereumEventRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LastSubmittedEthereumEventResponse. */
        interface ILastSubmittedEthereumEventResponse {

            /** LastSubmittedEthereumEventResponse event_nonce */
            event_nonce?: (Long|null);
        }

        /** Represents a LastSubmittedEthereumEventResponse. */
        class LastSubmittedEthereumEventResponse implements ILastSubmittedEthereumEventResponse {

            /**
             * Constructs a new LastSubmittedEthereumEventResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.ILastSubmittedEthereumEventResponse);

            /** LastSubmittedEthereumEventResponse event_nonce. */
            public event_nonce: Long;

            /**
             * Encodes the specified LastSubmittedEthereumEventResponse message. Does not implicitly {@link gravity.v1.LastSubmittedEthereumEventResponse.verify|verify} messages.
             * @param message LastSubmittedEthereumEventResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.ILastSubmittedEthereumEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LastSubmittedEthereumEventResponse message, length delimited. Does not implicitly {@link gravity.v1.LastSubmittedEthereumEventResponse.verify|verify} messages.
             * @param message LastSubmittedEthereumEventResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.ILastSubmittedEthereumEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LastSubmittedEthereumEventResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LastSubmittedEthereumEventResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.LastSubmittedEthereumEventResponse;

            /**
             * Decodes a LastSubmittedEthereumEventResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LastSubmittedEthereumEventResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.LastSubmittedEthereumEventResponse;

            /**
             * Verifies a LastSubmittedEthereumEventResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LastSubmittedEthereumEventResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LastSubmittedEthereumEventResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.LastSubmittedEthereumEventResponse;

            /**
             * Creates a plain object from a LastSubmittedEthereumEventResponse message. Also converts values to other types if specified.
             * @param message LastSubmittedEthereumEventResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.LastSubmittedEthereumEventResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LastSubmittedEthereumEventResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ERC20ToDenomRequest. */
        interface IERC20ToDenomRequest {

            /** ERC20ToDenomRequest erc20 */
            erc20?: (string|null);
        }

        /** Represents a ERC20ToDenomRequest. */
        class ERC20ToDenomRequest implements IERC20ToDenomRequest {

            /**
             * Constructs a new ERC20ToDenomRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IERC20ToDenomRequest);

            /** ERC20ToDenomRequest erc20. */
            public erc20: string;

            /**
             * Encodes the specified ERC20ToDenomRequest message. Does not implicitly {@link gravity.v1.ERC20ToDenomRequest.verify|verify} messages.
             * @param message ERC20ToDenomRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IERC20ToDenomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ERC20ToDenomRequest message, length delimited. Does not implicitly {@link gravity.v1.ERC20ToDenomRequest.verify|verify} messages.
             * @param message ERC20ToDenomRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IERC20ToDenomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ERC20ToDenomRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ERC20ToDenomRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.ERC20ToDenomRequest;

            /**
             * Decodes a ERC20ToDenomRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ERC20ToDenomRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.ERC20ToDenomRequest;

            /**
             * Verifies a ERC20ToDenomRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ERC20ToDenomRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ERC20ToDenomRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.ERC20ToDenomRequest;

            /**
             * Creates a plain object from a ERC20ToDenomRequest message. Also converts values to other types if specified.
             * @param message ERC20ToDenomRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.ERC20ToDenomRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ERC20ToDenomRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ERC20ToDenomResponse. */
        interface IERC20ToDenomResponse {

            /** ERC20ToDenomResponse denom */
            denom?: (string|null);

            /** ERC20ToDenomResponse cosmos_originated */
            cosmos_originated?: (boolean|null);
        }

        /** Represents a ERC20ToDenomResponse. */
        class ERC20ToDenomResponse implements IERC20ToDenomResponse {

            /**
             * Constructs a new ERC20ToDenomResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IERC20ToDenomResponse);

            /** ERC20ToDenomResponse denom. */
            public denom: string;

            /** ERC20ToDenomResponse cosmos_originated. */
            public cosmos_originated: boolean;

            /**
             * Encodes the specified ERC20ToDenomResponse message. Does not implicitly {@link gravity.v1.ERC20ToDenomResponse.verify|verify} messages.
             * @param message ERC20ToDenomResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IERC20ToDenomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ERC20ToDenomResponse message, length delimited. Does not implicitly {@link gravity.v1.ERC20ToDenomResponse.verify|verify} messages.
             * @param message ERC20ToDenomResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IERC20ToDenomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ERC20ToDenomResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ERC20ToDenomResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.ERC20ToDenomResponse;

            /**
             * Decodes a ERC20ToDenomResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ERC20ToDenomResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.ERC20ToDenomResponse;

            /**
             * Verifies a ERC20ToDenomResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ERC20ToDenomResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ERC20ToDenomResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.ERC20ToDenomResponse;

            /**
             * Creates a plain object from a ERC20ToDenomResponse message. Also converts values to other types if specified.
             * @param message ERC20ToDenomResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.ERC20ToDenomResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ERC20ToDenomResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DenomToERC20ParamsRequest. */
        interface IDenomToERC20ParamsRequest {

            /** DenomToERC20ParamsRequest denom */
            denom?: (string|null);
        }

        /** Represents a DenomToERC20ParamsRequest. */
        class DenomToERC20ParamsRequest implements IDenomToERC20ParamsRequest {

            /**
             * Constructs a new DenomToERC20ParamsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IDenomToERC20ParamsRequest);

            /** DenomToERC20ParamsRequest denom. */
            public denom: string;

            /**
             * Encodes the specified DenomToERC20ParamsRequest message. Does not implicitly {@link gravity.v1.DenomToERC20ParamsRequest.verify|verify} messages.
             * @param message DenomToERC20ParamsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IDenomToERC20ParamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DenomToERC20ParamsRequest message, length delimited. Does not implicitly {@link gravity.v1.DenomToERC20ParamsRequest.verify|verify} messages.
             * @param message DenomToERC20ParamsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IDenomToERC20ParamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DenomToERC20ParamsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DenomToERC20ParamsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.DenomToERC20ParamsRequest;

            /**
             * Decodes a DenomToERC20ParamsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DenomToERC20ParamsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.DenomToERC20ParamsRequest;

            /**
             * Verifies a DenomToERC20ParamsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DenomToERC20ParamsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DenomToERC20ParamsRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.DenomToERC20ParamsRequest;

            /**
             * Creates a plain object from a DenomToERC20ParamsRequest message. Also converts values to other types if specified.
             * @param message DenomToERC20ParamsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.DenomToERC20ParamsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DenomToERC20ParamsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DenomToERC20ParamsResponse. */
        interface IDenomToERC20ParamsResponse {

            /** DenomToERC20ParamsResponse base_denom */
            base_denom?: (string|null);

            /** DenomToERC20ParamsResponse erc20_name */
            erc20_name?: (string|null);

            /** DenomToERC20ParamsResponse erc20_symbol */
            erc20_symbol?: (string|null);

            /** DenomToERC20ParamsResponse erc20_decimals */
            erc20_decimals?: (Long|null);
        }

        /** Represents a DenomToERC20ParamsResponse. */
        class DenomToERC20ParamsResponse implements IDenomToERC20ParamsResponse {

            /**
             * Constructs a new DenomToERC20ParamsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IDenomToERC20ParamsResponse);

            /** DenomToERC20ParamsResponse base_denom. */
            public base_denom: string;

            /** DenomToERC20ParamsResponse erc20_name. */
            public erc20_name: string;

            /** DenomToERC20ParamsResponse erc20_symbol. */
            public erc20_symbol: string;

            /** DenomToERC20ParamsResponse erc20_decimals. */
            public erc20_decimals: Long;

            /**
             * Encodes the specified DenomToERC20ParamsResponse message. Does not implicitly {@link gravity.v1.DenomToERC20ParamsResponse.verify|verify} messages.
             * @param message DenomToERC20ParamsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IDenomToERC20ParamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DenomToERC20ParamsResponse message, length delimited. Does not implicitly {@link gravity.v1.DenomToERC20ParamsResponse.verify|verify} messages.
             * @param message DenomToERC20ParamsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IDenomToERC20ParamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DenomToERC20ParamsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DenomToERC20ParamsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.DenomToERC20ParamsResponse;

            /**
             * Decodes a DenomToERC20ParamsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DenomToERC20ParamsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.DenomToERC20ParamsResponse;

            /**
             * Verifies a DenomToERC20ParamsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DenomToERC20ParamsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DenomToERC20ParamsResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.DenomToERC20ParamsResponse;

            /**
             * Creates a plain object from a DenomToERC20ParamsResponse message. Also converts values to other types if specified.
             * @param message DenomToERC20ParamsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.DenomToERC20ParamsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DenomToERC20ParamsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DenomToERC20Request. */
        interface IDenomToERC20Request {

            /** DenomToERC20Request denom */
            denom?: (string|null);
        }

        /** Represents a DenomToERC20Request. */
        class DenomToERC20Request implements IDenomToERC20Request {

            /**
             * Constructs a new DenomToERC20Request.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IDenomToERC20Request);

            /** DenomToERC20Request denom. */
            public denom: string;

            /**
             * Encodes the specified DenomToERC20Request message. Does not implicitly {@link gravity.v1.DenomToERC20Request.verify|verify} messages.
             * @param message DenomToERC20Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IDenomToERC20Request, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DenomToERC20Request message, length delimited. Does not implicitly {@link gravity.v1.DenomToERC20Request.verify|verify} messages.
             * @param message DenomToERC20Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IDenomToERC20Request, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DenomToERC20Request message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DenomToERC20Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.DenomToERC20Request;

            /**
             * Decodes a DenomToERC20Request message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DenomToERC20Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.DenomToERC20Request;

            /**
             * Verifies a DenomToERC20Request message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DenomToERC20Request message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DenomToERC20Request
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.DenomToERC20Request;

            /**
             * Creates a plain object from a DenomToERC20Request message. Also converts values to other types if specified.
             * @param message DenomToERC20Request
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.DenomToERC20Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DenomToERC20Request to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DenomToERC20Response. */
        interface IDenomToERC20Response {

            /** DenomToERC20Response erc20 */
            erc20?: (string|null);

            /** DenomToERC20Response cosmos_originated */
            cosmos_originated?: (boolean|null);
        }

        /** Represents a DenomToERC20Response. */
        class DenomToERC20Response implements IDenomToERC20Response {

            /**
             * Constructs a new DenomToERC20Response.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IDenomToERC20Response);

            /** DenomToERC20Response erc20. */
            public erc20: string;

            /** DenomToERC20Response cosmos_originated. */
            public cosmos_originated: boolean;

            /**
             * Encodes the specified DenomToERC20Response message. Does not implicitly {@link gravity.v1.DenomToERC20Response.verify|verify} messages.
             * @param message DenomToERC20Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IDenomToERC20Response, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DenomToERC20Response message, length delimited. Does not implicitly {@link gravity.v1.DenomToERC20Response.verify|verify} messages.
             * @param message DenomToERC20Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IDenomToERC20Response, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DenomToERC20Response message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DenomToERC20Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.DenomToERC20Response;

            /**
             * Decodes a DenomToERC20Response message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DenomToERC20Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.DenomToERC20Response;

            /**
             * Verifies a DenomToERC20Response message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DenomToERC20Response message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DenomToERC20Response
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.DenomToERC20Response;

            /**
             * Creates a plain object from a DenomToERC20Response message. Also converts values to other types if specified.
             * @param message DenomToERC20Response
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.DenomToERC20Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DenomToERC20Response to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DelegateKeysByValidatorRequest. */
        interface IDelegateKeysByValidatorRequest {

            /** DelegateKeysByValidatorRequest validator_address */
            validator_address?: (string|null);
        }

        /** Represents a DelegateKeysByValidatorRequest. */
        class DelegateKeysByValidatorRequest implements IDelegateKeysByValidatorRequest {

            /**
             * Constructs a new DelegateKeysByValidatorRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IDelegateKeysByValidatorRequest);

            /** DelegateKeysByValidatorRequest validator_address. */
            public validator_address: string;

            /**
             * Encodes the specified DelegateKeysByValidatorRequest message. Does not implicitly {@link gravity.v1.DelegateKeysByValidatorRequest.verify|verify} messages.
             * @param message DelegateKeysByValidatorRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IDelegateKeysByValidatorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DelegateKeysByValidatorRequest message, length delimited. Does not implicitly {@link gravity.v1.DelegateKeysByValidatorRequest.verify|verify} messages.
             * @param message DelegateKeysByValidatorRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IDelegateKeysByValidatorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DelegateKeysByValidatorRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DelegateKeysByValidatorRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.DelegateKeysByValidatorRequest;

            /**
             * Decodes a DelegateKeysByValidatorRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DelegateKeysByValidatorRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.DelegateKeysByValidatorRequest;

            /**
             * Verifies a DelegateKeysByValidatorRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DelegateKeysByValidatorRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DelegateKeysByValidatorRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.DelegateKeysByValidatorRequest;

            /**
             * Creates a plain object from a DelegateKeysByValidatorRequest message. Also converts values to other types if specified.
             * @param message DelegateKeysByValidatorRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.DelegateKeysByValidatorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DelegateKeysByValidatorRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DelegateKeysByValidatorResponse. */
        interface IDelegateKeysByValidatorResponse {

            /** DelegateKeysByValidatorResponse eth_address */
            eth_address?: (string|null);

            /** DelegateKeysByValidatorResponse orchestrator_address */
            orchestrator_address?: (string|null);
        }

        /** Represents a DelegateKeysByValidatorResponse. */
        class DelegateKeysByValidatorResponse implements IDelegateKeysByValidatorResponse {

            /**
             * Constructs a new DelegateKeysByValidatorResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IDelegateKeysByValidatorResponse);

            /** DelegateKeysByValidatorResponse eth_address. */
            public eth_address: string;

            /** DelegateKeysByValidatorResponse orchestrator_address. */
            public orchestrator_address: string;

            /**
             * Encodes the specified DelegateKeysByValidatorResponse message. Does not implicitly {@link gravity.v1.DelegateKeysByValidatorResponse.verify|verify} messages.
             * @param message DelegateKeysByValidatorResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IDelegateKeysByValidatorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DelegateKeysByValidatorResponse message, length delimited. Does not implicitly {@link gravity.v1.DelegateKeysByValidatorResponse.verify|verify} messages.
             * @param message DelegateKeysByValidatorResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IDelegateKeysByValidatorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DelegateKeysByValidatorResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DelegateKeysByValidatorResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.DelegateKeysByValidatorResponse;

            /**
             * Decodes a DelegateKeysByValidatorResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DelegateKeysByValidatorResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.DelegateKeysByValidatorResponse;

            /**
             * Verifies a DelegateKeysByValidatorResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DelegateKeysByValidatorResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DelegateKeysByValidatorResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.DelegateKeysByValidatorResponse;

            /**
             * Creates a plain object from a DelegateKeysByValidatorResponse message. Also converts values to other types if specified.
             * @param message DelegateKeysByValidatorResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.DelegateKeysByValidatorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DelegateKeysByValidatorResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DelegateKeysByEthereumSignerRequest. */
        interface IDelegateKeysByEthereumSignerRequest {

            /** DelegateKeysByEthereumSignerRequest ethereum_signer */
            ethereum_signer?: (string|null);
        }

        /** Represents a DelegateKeysByEthereumSignerRequest. */
        class DelegateKeysByEthereumSignerRequest implements IDelegateKeysByEthereumSignerRequest {

            /**
             * Constructs a new DelegateKeysByEthereumSignerRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IDelegateKeysByEthereumSignerRequest);

            /** DelegateKeysByEthereumSignerRequest ethereum_signer. */
            public ethereum_signer: string;

            /**
             * Encodes the specified DelegateKeysByEthereumSignerRequest message. Does not implicitly {@link gravity.v1.DelegateKeysByEthereumSignerRequest.verify|verify} messages.
             * @param message DelegateKeysByEthereumSignerRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IDelegateKeysByEthereumSignerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DelegateKeysByEthereumSignerRequest message, length delimited. Does not implicitly {@link gravity.v1.DelegateKeysByEthereumSignerRequest.verify|verify} messages.
             * @param message DelegateKeysByEthereumSignerRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IDelegateKeysByEthereumSignerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DelegateKeysByEthereumSignerRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DelegateKeysByEthereumSignerRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.DelegateKeysByEthereumSignerRequest;

            /**
             * Decodes a DelegateKeysByEthereumSignerRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DelegateKeysByEthereumSignerRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.DelegateKeysByEthereumSignerRequest;

            /**
             * Verifies a DelegateKeysByEthereumSignerRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DelegateKeysByEthereumSignerRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DelegateKeysByEthereumSignerRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.DelegateKeysByEthereumSignerRequest;

            /**
             * Creates a plain object from a DelegateKeysByEthereumSignerRequest message. Also converts values to other types if specified.
             * @param message DelegateKeysByEthereumSignerRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.DelegateKeysByEthereumSignerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DelegateKeysByEthereumSignerRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DelegateKeysByEthereumSignerResponse. */
        interface IDelegateKeysByEthereumSignerResponse {

            /** DelegateKeysByEthereumSignerResponse validator_address */
            validator_address?: (string|null);

            /** DelegateKeysByEthereumSignerResponse orchestrator_address */
            orchestrator_address?: (string|null);
        }

        /** Represents a DelegateKeysByEthereumSignerResponse. */
        class DelegateKeysByEthereumSignerResponse implements IDelegateKeysByEthereumSignerResponse {

            /**
             * Constructs a new DelegateKeysByEthereumSignerResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IDelegateKeysByEthereumSignerResponse);

            /** DelegateKeysByEthereumSignerResponse validator_address. */
            public validator_address: string;

            /** DelegateKeysByEthereumSignerResponse orchestrator_address. */
            public orchestrator_address: string;

            /**
             * Encodes the specified DelegateKeysByEthereumSignerResponse message. Does not implicitly {@link gravity.v1.DelegateKeysByEthereumSignerResponse.verify|verify} messages.
             * @param message DelegateKeysByEthereumSignerResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IDelegateKeysByEthereumSignerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DelegateKeysByEthereumSignerResponse message, length delimited. Does not implicitly {@link gravity.v1.DelegateKeysByEthereumSignerResponse.verify|verify} messages.
             * @param message DelegateKeysByEthereumSignerResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IDelegateKeysByEthereumSignerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DelegateKeysByEthereumSignerResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DelegateKeysByEthereumSignerResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.DelegateKeysByEthereumSignerResponse;

            /**
             * Decodes a DelegateKeysByEthereumSignerResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DelegateKeysByEthereumSignerResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.DelegateKeysByEthereumSignerResponse;

            /**
             * Verifies a DelegateKeysByEthereumSignerResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DelegateKeysByEthereumSignerResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DelegateKeysByEthereumSignerResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.DelegateKeysByEthereumSignerResponse;

            /**
             * Creates a plain object from a DelegateKeysByEthereumSignerResponse message. Also converts values to other types if specified.
             * @param message DelegateKeysByEthereumSignerResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.DelegateKeysByEthereumSignerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DelegateKeysByEthereumSignerResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DelegateKeysByOrchestratorRequest. */
        interface IDelegateKeysByOrchestratorRequest {

            /** DelegateKeysByOrchestratorRequest orchestrator_address */
            orchestrator_address?: (string|null);
        }

        /** Represents a DelegateKeysByOrchestratorRequest. */
        class DelegateKeysByOrchestratorRequest implements IDelegateKeysByOrchestratorRequest {

            /**
             * Constructs a new DelegateKeysByOrchestratorRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IDelegateKeysByOrchestratorRequest);

            /** DelegateKeysByOrchestratorRequest orchestrator_address. */
            public orchestrator_address: string;

            /**
             * Encodes the specified DelegateKeysByOrchestratorRequest message. Does not implicitly {@link gravity.v1.DelegateKeysByOrchestratorRequest.verify|verify} messages.
             * @param message DelegateKeysByOrchestratorRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IDelegateKeysByOrchestratorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DelegateKeysByOrchestratorRequest message, length delimited. Does not implicitly {@link gravity.v1.DelegateKeysByOrchestratorRequest.verify|verify} messages.
             * @param message DelegateKeysByOrchestratorRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IDelegateKeysByOrchestratorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DelegateKeysByOrchestratorRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DelegateKeysByOrchestratorRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.DelegateKeysByOrchestratorRequest;

            /**
             * Decodes a DelegateKeysByOrchestratorRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DelegateKeysByOrchestratorRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.DelegateKeysByOrchestratorRequest;

            /**
             * Verifies a DelegateKeysByOrchestratorRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DelegateKeysByOrchestratorRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DelegateKeysByOrchestratorRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.DelegateKeysByOrchestratorRequest;

            /**
             * Creates a plain object from a DelegateKeysByOrchestratorRequest message. Also converts values to other types if specified.
             * @param message DelegateKeysByOrchestratorRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.DelegateKeysByOrchestratorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DelegateKeysByOrchestratorRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DelegateKeysByOrchestratorResponse. */
        interface IDelegateKeysByOrchestratorResponse {

            /** DelegateKeysByOrchestratorResponse validator_address */
            validator_address?: (string|null);

            /** DelegateKeysByOrchestratorResponse ethereum_signer */
            ethereum_signer?: (string|null);
        }

        /** Represents a DelegateKeysByOrchestratorResponse. */
        class DelegateKeysByOrchestratorResponse implements IDelegateKeysByOrchestratorResponse {

            /**
             * Constructs a new DelegateKeysByOrchestratorResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IDelegateKeysByOrchestratorResponse);

            /** DelegateKeysByOrchestratorResponse validator_address. */
            public validator_address: string;

            /** DelegateKeysByOrchestratorResponse ethereum_signer. */
            public ethereum_signer: string;

            /**
             * Encodes the specified DelegateKeysByOrchestratorResponse message. Does not implicitly {@link gravity.v1.DelegateKeysByOrchestratorResponse.verify|verify} messages.
             * @param message DelegateKeysByOrchestratorResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IDelegateKeysByOrchestratorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DelegateKeysByOrchestratorResponse message, length delimited. Does not implicitly {@link gravity.v1.DelegateKeysByOrchestratorResponse.verify|verify} messages.
             * @param message DelegateKeysByOrchestratorResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IDelegateKeysByOrchestratorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DelegateKeysByOrchestratorResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DelegateKeysByOrchestratorResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.DelegateKeysByOrchestratorResponse;

            /**
             * Decodes a DelegateKeysByOrchestratorResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DelegateKeysByOrchestratorResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.DelegateKeysByOrchestratorResponse;

            /**
             * Verifies a DelegateKeysByOrchestratorResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DelegateKeysByOrchestratorResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DelegateKeysByOrchestratorResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.DelegateKeysByOrchestratorResponse;

            /**
             * Creates a plain object from a DelegateKeysByOrchestratorResponse message. Also converts values to other types if specified.
             * @param message DelegateKeysByOrchestratorResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.DelegateKeysByOrchestratorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DelegateKeysByOrchestratorResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DelegateKeysRequest. */
        interface IDelegateKeysRequest {
        }

        /** Represents a DelegateKeysRequest. */
        class DelegateKeysRequest implements IDelegateKeysRequest {

            /**
             * Constructs a new DelegateKeysRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IDelegateKeysRequest);

            /**
             * Encodes the specified DelegateKeysRequest message. Does not implicitly {@link gravity.v1.DelegateKeysRequest.verify|verify} messages.
             * @param message DelegateKeysRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IDelegateKeysRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DelegateKeysRequest message, length delimited. Does not implicitly {@link gravity.v1.DelegateKeysRequest.verify|verify} messages.
             * @param message DelegateKeysRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IDelegateKeysRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DelegateKeysRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DelegateKeysRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.DelegateKeysRequest;

            /**
             * Decodes a DelegateKeysRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DelegateKeysRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.DelegateKeysRequest;

            /**
             * Verifies a DelegateKeysRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DelegateKeysRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DelegateKeysRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.DelegateKeysRequest;

            /**
             * Creates a plain object from a DelegateKeysRequest message. Also converts values to other types if specified.
             * @param message DelegateKeysRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.DelegateKeysRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DelegateKeysRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DelegateKeysResponse. */
        interface IDelegateKeysResponse {

            /** DelegateKeysResponse delegate_keys */
            delegate_keys?: (gravity.v1.IMsgDelegateKeys[]|null);
        }

        /** Represents a DelegateKeysResponse. */
        class DelegateKeysResponse implements IDelegateKeysResponse {

            /**
             * Constructs a new DelegateKeysResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IDelegateKeysResponse);

            /** DelegateKeysResponse delegate_keys. */
            public delegate_keys: gravity.v1.IMsgDelegateKeys[];

            /**
             * Encodes the specified DelegateKeysResponse message. Does not implicitly {@link gravity.v1.DelegateKeysResponse.verify|verify} messages.
             * @param message DelegateKeysResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IDelegateKeysResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DelegateKeysResponse message, length delimited. Does not implicitly {@link gravity.v1.DelegateKeysResponse.verify|verify} messages.
             * @param message DelegateKeysResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IDelegateKeysResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DelegateKeysResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DelegateKeysResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.DelegateKeysResponse;

            /**
             * Decodes a DelegateKeysResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DelegateKeysResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.DelegateKeysResponse;

            /**
             * Verifies a DelegateKeysResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DelegateKeysResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DelegateKeysResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.DelegateKeysResponse;

            /**
             * Creates a plain object from a DelegateKeysResponse message. Also converts values to other types if specified.
             * @param message DelegateKeysResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.DelegateKeysResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DelegateKeysResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BatchedSendToEthereumsRequest. */
        interface IBatchedSendToEthereumsRequest {

            /** BatchedSendToEthereumsRequest sender_address */
            sender_address?: (string|null);
        }

        /** Represents a BatchedSendToEthereumsRequest. */
        class BatchedSendToEthereumsRequest implements IBatchedSendToEthereumsRequest {

            /**
             * Constructs a new BatchedSendToEthereumsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IBatchedSendToEthereumsRequest);

            /** BatchedSendToEthereumsRequest sender_address. */
            public sender_address: string;

            /**
             * Encodes the specified BatchedSendToEthereumsRequest message. Does not implicitly {@link gravity.v1.BatchedSendToEthereumsRequest.verify|verify} messages.
             * @param message BatchedSendToEthereumsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IBatchedSendToEthereumsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchedSendToEthereumsRequest message, length delimited. Does not implicitly {@link gravity.v1.BatchedSendToEthereumsRequest.verify|verify} messages.
             * @param message BatchedSendToEthereumsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IBatchedSendToEthereumsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchedSendToEthereumsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchedSendToEthereumsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.BatchedSendToEthereumsRequest;

            /**
             * Decodes a BatchedSendToEthereumsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchedSendToEthereumsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.BatchedSendToEthereumsRequest;

            /**
             * Verifies a BatchedSendToEthereumsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchedSendToEthereumsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchedSendToEthereumsRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.BatchedSendToEthereumsRequest;

            /**
             * Creates a plain object from a BatchedSendToEthereumsRequest message. Also converts values to other types if specified.
             * @param message BatchedSendToEthereumsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.BatchedSendToEthereumsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchedSendToEthereumsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BatchedSendToEthereumsResponse. */
        interface IBatchedSendToEthereumsResponse {

            /** BatchedSendToEthereumsResponse send_to_ethereums */
            send_to_ethereums?: (gravity.v1.ISendToEthereum[]|null);
        }

        /** Represents a BatchedSendToEthereumsResponse. */
        class BatchedSendToEthereumsResponse implements IBatchedSendToEthereumsResponse {

            /**
             * Constructs a new BatchedSendToEthereumsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IBatchedSendToEthereumsResponse);

            /** BatchedSendToEthereumsResponse send_to_ethereums. */
            public send_to_ethereums: gravity.v1.ISendToEthereum[];

            /**
             * Encodes the specified BatchedSendToEthereumsResponse message. Does not implicitly {@link gravity.v1.BatchedSendToEthereumsResponse.verify|verify} messages.
             * @param message BatchedSendToEthereumsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IBatchedSendToEthereumsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchedSendToEthereumsResponse message, length delimited. Does not implicitly {@link gravity.v1.BatchedSendToEthereumsResponse.verify|verify} messages.
             * @param message BatchedSendToEthereumsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IBatchedSendToEthereumsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchedSendToEthereumsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchedSendToEthereumsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.BatchedSendToEthereumsResponse;

            /**
             * Decodes a BatchedSendToEthereumsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchedSendToEthereumsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.BatchedSendToEthereumsResponse;

            /**
             * Verifies a BatchedSendToEthereumsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchedSendToEthereumsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchedSendToEthereumsResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.BatchedSendToEthereumsResponse;

            /**
             * Creates a plain object from a BatchedSendToEthereumsResponse message. Also converts values to other types if specified.
             * @param message BatchedSendToEthereumsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.BatchedSendToEthereumsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchedSendToEthereumsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UnbatchedSendToEthereumsRequest. */
        interface IUnbatchedSendToEthereumsRequest {

            /** UnbatchedSendToEthereumsRequest sender_address */
            sender_address?: (string|null);

            /** UnbatchedSendToEthereumsRequest pagination */
            pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);
        }

        /** Represents an UnbatchedSendToEthereumsRequest. */
        class UnbatchedSendToEthereumsRequest implements IUnbatchedSendToEthereumsRequest {

            /**
             * Constructs a new UnbatchedSendToEthereumsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IUnbatchedSendToEthereumsRequest);

            /** UnbatchedSendToEthereumsRequest sender_address. */
            public sender_address: string;

            /** UnbatchedSendToEthereumsRequest pagination. */
            public pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);

            /**
             * Encodes the specified UnbatchedSendToEthereumsRequest message. Does not implicitly {@link gravity.v1.UnbatchedSendToEthereumsRequest.verify|verify} messages.
             * @param message UnbatchedSendToEthereumsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IUnbatchedSendToEthereumsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UnbatchedSendToEthereumsRequest message, length delimited. Does not implicitly {@link gravity.v1.UnbatchedSendToEthereumsRequest.verify|verify} messages.
             * @param message UnbatchedSendToEthereumsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IUnbatchedSendToEthereumsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UnbatchedSendToEthereumsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UnbatchedSendToEthereumsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.UnbatchedSendToEthereumsRequest;

            /**
             * Decodes an UnbatchedSendToEthereumsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UnbatchedSendToEthereumsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.UnbatchedSendToEthereumsRequest;

            /**
             * Verifies an UnbatchedSendToEthereumsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UnbatchedSendToEthereumsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UnbatchedSendToEthereumsRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.UnbatchedSendToEthereumsRequest;

            /**
             * Creates a plain object from an UnbatchedSendToEthereumsRequest message. Also converts values to other types if specified.
             * @param message UnbatchedSendToEthereumsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.UnbatchedSendToEthereumsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UnbatchedSendToEthereumsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UnbatchedSendToEthereumsResponse. */
        interface IUnbatchedSendToEthereumsResponse {

            /** UnbatchedSendToEthereumsResponse send_to_ethereums */
            send_to_ethereums?: (gravity.v1.ISendToEthereum[]|null);

            /** UnbatchedSendToEthereumsResponse pagination */
            pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);
        }

        /** Represents an UnbatchedSendToEthereumsResponse. */
        class UnbatchedSendToEthereumsResponse implements IUnbatchedSendToEthereumsResponse {

            /**
             * Constructs a new UnbatchedSendToEthereumsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IUnbatchedSendToEthereumsResponse);

            /** UnbatchedSendToEthereumsResponse send_to_ethereums. */
            public send_to_ethereums: gravity.v1.ISendToEthereum[];

            /** UnbatchedSendToEthereumsResponse pagination. */
            public pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);

            /**
             * Encodes the specified UnbatchedSendToEthereumsResponse message. Does not implicitly {@link gravity.v1.UnbatchedSendToEthereumsResponse.verify|verify} messages.
             * @param message UnbatchedSendToEthereumsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IUnbatchedSendToEthereumsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UnbatchedSendToEthereumsResponse message, length delimited. Does not implicitly {@link gravity.v1.UnbatchedSendToEthereumsResponse.verify|verify} messages.
             * @param message UnbatchedSendToEthereumsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IUnbatchedSendToEthereumsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UnbatchedSendToEthereumsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UnbatchedSendToEthereumsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.UnbatchedSendToEthereumsResponse;

            /**
             * Decodes an UnbatchedSendToEthereumsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UnbatchedSendToEthereumsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.UnbatchedSendToEthereumsResponse;

            /**
             * Verifies an UnbatchedSendToEthereumsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UnbatchedSendToEthereumsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UnbatchedSendToEthereumsResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.UnbatchedSendToEthereumsResponse;

            /**
             * Creates a plain object from an UnbatchedSendToEthereumsResponse message. Also converts values to other types if specified.
             * @param message UnbatchedSendToEthereumsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.UnbatchedSendToEthereumsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UnbatchedSendToEthereumsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Params. */
        interface IParams {

            /** Params gravity_id */
            gravity_id?: (string|null);

            /** Params contract_source_hash */
            contract_source_hash?: (string|null);

            /** Params bridge_ethereum_address */
            bridge_ethereum_address?: (string|null);

            /** Params bridge_chain_id */
            bridge_chain_id?: (Long|null);

            /** Params signed_signer_set_txs_window */
            signed_signer_set_txs_window?: (Long|null);

            /** Params signed_batches_window */
            signed_batches_window?: (Long|null);

            /** Params ethereum_signatures_window */
            ethereum_signatures_window?: (Long|null);

            /** Params target_eth_tx_timeout */
            target_eth_tx_timeout?: (Long|null);

            /** Params average_block_time */
            average_block_time?: (Long|null);

            /** Params average_ethereum_block_time */
            average_ethereum_block_time?: (Long|null);

            /** Params slash_fraction_signer_set_tx */
            slash_fraction_signer_set_tx?: (Uint8Array|null);

            /** Params slash_fraction_batch */
            slash_fraction_batch?: (Uint8Array|null);

            /** Params slash_fraction_ethereum_signature */
            slash_fraction_ethereum_signature?: (Uint8Array|null);

            /** Params slash_fraction_conflicting_ethereum_signature */
            slash_fraction_conflicting_ethereum_signature?: (Uint8Array|null);

            /** Params unbond_slashing_signer_set_txs_window */
            unbond_slashing_signer_set_txs_window?: (Long|null);
        }

        /** Represents a Params. */
        class Params implements IParams {

            /**
             * Constructs a new Params.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IParams);

            /** Params gravity_id. */
            public gravity_id: string;

            /** Params contract_source_hash. */
            public contract_source_hash: string;

            /** Params bridge_ethereum_address. */
            public bridge_ethereum_address: string;

            /** Params bridge_chain_id. */
            public bridge_chain_id: Long;

            /** Params signed_signer_set_txs_window. */
            public signed_signer_set_txs_window: Long;

            /** Params signed_batches_window. */
            public signed_batches_window: Long;

            /** Params ethereum_signatures_window. */
            public ethereum_signatures_window: Long;

            /** Params target_eth_tx_timeout. */
            public target_eth_tx_timeout: Long;

            /** Params average_block_time. */
            public average_block_time: Long;

            /** Params average_ethereum_block_time. */
            public average_ethereum_block_time: Long;

            /** Params slash_fraction_signer_set_tx. */
            public slash_fraction_signer_set_tx: Uint8Array;

            /** Params slash_fraction_batch. */
            public slash_fraction_batch: Uint8Array;

            /** Params slash_fraction_ethereum_signature. */
            public slash_fraction_ethereum_signature: Uint8Array;

            /** Params slash_fraction_conflicting_ethereum_signature. */
            public slash_fraction_conflicting_ethereum_signature: Uint8Array;

            /** Params unbond_slashing_signer_set_txs_window. */
            public unbond_slashing_signer_set_txs_window: Long;

            /**
             * Encodes the specified Params message. Does not implicitly {@link gravity.v1.Params.verify|verify} messages.
             * @param message Params message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Params message, length delimited. Does not implicitly {@link gravity.v1.Params.verify|verify} messages.
             * @param message Params message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Params message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Params
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.Params;

            /**
             * Decodes a Params message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Params
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.Params;

            /**
             * Verifies a Params message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Params message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Params
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.Params;

            /**
             * Creates a plain object from a Params message. Also converts values to other types if specified.
             * @param message Params
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.Params, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Params to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GenesisState. */
        interface IGenesisState {

            /** GenesisState params */
            params?: (gravity.v1.IParams|null);

            /** GenesisState last_observed_event_nonce */
            last_observed_event_nonce?: (Long|null);

            /** GenesisState outgoing_txs */
            outgoing_txs?: (google.protobuf.IAny[]|null);

            /** GenesisState confirmations */
            confirmations?: (google.protobuf.IAny[]|null);

            /** GenesisState ethereum_event_vote_records */
            ethereum_event_vote_records?: (gravity.v1.IEthereumEventVoteRecord[]|null);

            /** GenesisState delegate_keys */
            delegate_keys?: (gravity.v1.IMsgDelegateKeys[]|null);

            /** GenesisState erc20_to_denoms */
            erc20_to_denoms?: (gravity.v1.IERC20ToDenom[]|null);

            /** GenesisState unbatched_send_to_ethereum_txs */
            unbatched_send_to_ethereum_txs?: (gravity.v1.ISendToEthereum[]|null);
        }

        /** Represents a GenesisState. */
        class GenesisState implements IGenesisState {

            /**
             * Constructs a new GenesisState.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IGenesisState);

            /** GenesisState params. */
            public params?: (gravity.v1.IParams|null);

            /** GenesisState last_observed_event_nonce. */
            public last_observed_event_nonce: Long;

            /** GenesisState outgoing_txs. */
            public outgoing_txs: google.protobuf.IAny[];

            /** GenesisState confirmations. */
            public confirmations: google.protobuf.IAny[];

            /** GenesisState ethereum_event_vote_records. */
            public ethereum_event_vote_records: gravity.v1.IEthereumEventVoteRecord[];

            /** GenesisState delegate_keys. */
            public delegate_keys: gravity.v1.IMsgDelegateKeys[];

            /** GenesisState erc20_to_denoms. */
            public erc20_to_denoms: gravity.v1.IERC20ToDenom[];

            /** GenesisState unbatched_send_to_ethereum_txs. */
            public unbatched_send_to_ethereum_txs: gravity.v1.ISendToEthereum[];

            /**
             * Encodes the specified GenesisState message. Does not implicitly {@link gravity.v1.GenesisState.verify|verify} messages.
             * @param message GenesisState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IGenesisState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GenesisState message, length delimited. Does not implicitly {@link gravity.v1.GenesisState.verify|verify} messages.
             * @param message GenesisState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IGenesisState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GenesisState message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GenesisState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.GenesisState;

            /**
             * Decodes a GenesisState message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GenesisState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.GenesisState;

            /**
             * Verifies a GenesisState message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GenesisState message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GenesisState
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.GenesisState;

            /**
             * Creates a plain object from a GenesisState message. Also converts values to other types if specified.
             * @param message GenesisState
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.GenesisState, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GenesisState to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ERC20ToDenom. */
        interface IERC20ToDenom {

            /** ERC20ToDenom erc20 */
            erc20?: (string|null);

            /** ERC20ToDenom denom */
            denom?: (string|null);
        }

        /** Represents a ERC20ToDenom. */
        class ERC20ToDenom implements IERC20ToDenom {

            /**
             * Constructs a new ERC20ToDenom.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IERC20ToDenom);

            /** ERC20ToDenom erc20. */
            public erc20: string;

            /** ERC20ToDenom denom. */
            public denom: string;

            /**
             * Encodes the specified ERC20ToDenom message. Does not implicitly {@link gravity.v1.ERC20ToDenom.verify|verify} messages.
             * @param message ERC20ToDenom message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IERC20ToDenom, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ERC20ToDenom message, length delimited. Does not implicitly {@link gravity.v1.ERC20ToDenom.verify|verify} messages.
             * @param message ERC20ToDenom message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IERC20ToDenom, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ERC20ToDenom message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ERC20ToDenom
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.ERC20ToDenom;

            /**
             * Decodes a ERC20ToDenom message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ERC20ToDenom
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.ERC20ToDenom;

            /**
             * Verifies a ERC20ToDenom message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ERC20ToDenom message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ERC20ToDenom
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.ERC20ToDenom;

            /**
             * Creates a plain object from a ERC20ToDenom message. Also converts values to other types if specified.
             * @param message ERC20ToDenom
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.ERC20ToDenom, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ERC20ToDenom to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a Msg */
        class Msg extends $protobuf.rpc.Service {

            /**
             * Constructs a new Msg service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Calls SendToEthereum.
             * @param request MsgSendToEthereum message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgSendToEthereumResponse
             */
            public sendToEthereum(request: gravity.v1.IMsgSendToEthereum, callback: gravity.v1.Msg.SendToEthereumCallback): void;

            /**
             * Calls SendToEthereum.
             * @param request MsgSendToEthereum message or plain object
             * @returns Promise
             */
            public sendToEthereum(request: gravity.v1.IMsgSendToEthereum): Promise<gravity.v1.MsgSendToEthereumResponse>;

            /**
             * Calls CancelSendToEthereum.
             * @param request MsgCancelSendToEthereum message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgCancelSendToEthereumResponse
             */
            public cancelSendToEthereum(request: gravity.v1.IMsgCancelSendToEthereum, callback: gravity.v1.Msg.CancelSendToEthereumCallback): void;

            /**
             * Calls CancelSendToEthereum.
             * @param request MsgCancelSendToEthereum message or plain object
             * @returns Promise
             */
            public cancelSendToEthereum(request: gravity.v1.IMsgCancelSendToEthereum): Promise<gravity.v1.MsgCancelSendToEthereumResponse>;

            /**
             * Calls RequestBatchTx.
             * @param request MsgRequestBatchTx message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgRequestBatchTxResponse
             */
            public requestBatchTx(request: gravity.v1.IMsgRequestBatchTx, callback: gravity.v1.Msg.RequestBatchTxCallback): void;

            /**
             * Calls RequestBatchTx.
             * @param request MsgRequestBatchTx message or plain object
             * @returns Promise
             */
            public requestBatchTx(request: gravity.v1.IMsgRequestBatchTx): Promise<gravity.v1.MsgRequestBatchTxResponse>;

            /**
             * Calls SubmitEthereumTxConfirmation.
             * @param request MsgSubmitEthereumTxConfirmation message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgSubmitEthereumTxConfirmationResponse
             */
            public submitEthereumTxConfirmation(request: gravity.v1.IMsgSubmitEthereumTxConfirmation, callback: gravity.v1.Msg.SubmitEthereumTxConfirmationCallback): void;

            /**
             * Calls SubmitEthereumTxConfirmation.
             * @param request MsgSubmitEthereumTxConfirmation message or plain object
             * @returns Promise
             */
            public submitEthereumTxConfirmation(request: gravity.v1.IMsgSubmitEthereumTxConfirmation): Promise<gravity.v1.MsgSubmitEthereumTxConfirmationResponse>;

            /**
             * Calls SubmitEthereumEvent.
             * @param request MsgSubmitEthereumEvent message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgSubmitEthereumEventResponse
             */
            public submitEthereumEvent(request: gravity.v1.IMsgSubmitEthereumEvent, callback: gravity.v1.Msg.SubmitEthereumEventCallback): void;

            /**
             * Calls SubmitEthereumEvent.
             * @param request MsgSubmitEthereumEvent message or plain object
             * @returns Promise
             */
            public submitEthereumEvent(request: gravity.v1.IMsgSubmitEthereumEvent): Promise<gravity.v1.MsgSubmitEthereumEventResponse>;

            /**
             * Calls SetDelegateKeys.
             * @param request MsgDelegateKeys message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgDelegateKeysResponse
             */
            public setDelegateKeys(request: gravity.v1.IMsgDelegateKeys, callback: gravity.v1.Msg.SetDelegateKeysCallback): void;

            /**
             * Calls SetDelegateKeys.
             * @param request MsgDelegateKeys message or plain object
             * @returns Promise
             */
            public setDelegateKeys(request: gravity.v1.IMsgDelegateKeys): Promise<gravity.v1.MsgDelegateKeysResponse>;
        }

        namespace Msg {

            /**
             * Callback as used by {@link gravity.v1.Msg#sendToEthereum}.
             * @param error Error, if any
             * @param [response] MsgSendToEthereumResponse
             */
            type SendToEthereumCallback = (error: (Error|null), response?: gravity.v1.MsgSendToEthereumResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Msg#cancelSendToEthereum}.
             * @param error Error, if any
             * @param [response] MsgCancelSendToEthereumResponse
             */
            type CancelSendToEthereumCallback = (error: (Error|null), response?: gravity.v1.MsgCancelSendToEthereumResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Msg#requestBatchTx}.
             * @param error Error, if any
             * @param [response] MsgRequestBatchTxResponse
             */
            type RequestBatchTxCallback = (error: (Error|null), response?: gravity.v1.MsgRequestBatchTxResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Msg#submitEthereumTxConfirmation}.
             * @param error Error, if any
             * @param [response] MsgSubmitEthereumTxConfirmationResponse
             */
            type SubmitEthereumTxConfirmationCallback = (error: (Error|null), response?: gravity.v1.MsgSubmitEthereumTxConfirmationResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Msg#submitEthereumEvent}.
             * @param error Error, if any
             * @param [response] MsgSubmitEthereumEventResponse
             */
            type SubmitEthereumEventCallback = (error: (Error|null), response?: gravity.v1.MsgSubmitEthereumEventResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Msg#setDelegateKeys}.
             * @param error Error, if any
             * @param [response] MsgDelegateKeysResponse
             */
            type SetDelegateKeysCallback = (error: (Error|null), response?: gravity.v1.MsgDelegateKeysResponse) => void;
        }

        /** Properties of a MsgSendToEthereum. */
        interface IMsgSendToEthereum {

            /** MsgSendToEthereum sender */
            sender?: (string|null);

            /** MsgSendToEthereum ethereum_recipient */
            ethereum_recipient?: (string|null);

            /** MsgSendToEthereum amount */
            amount?: (cosmos.base.v1beta1.ICoin|null);

            /** MsgSendToEthereum bridge_fee */
            bridge_fee?: (cosmos.base.v1beta1.ICoin|null);
        }

        /** Represents a MsgSendToEthereum. */
        class MsgSendToEthereum implements IMsgSendToEthereum {

            /**
             * Constructs a new MsgSendToEthereum.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgSendToEthereum);

            /** MsgSendToEthereum sender. */
            public sender: string;

            /** MsgSendToEthereum ethereum_recipient. */
            public ethereum_recipient: string;

            /** MsgSendToEthereum amount. */
            public amount?: (cosmos.base.v1beta1.ICoin|null);

            /** MsgSendToEthereum bridge_fee. */
            public bridge_fee?: (cosmos.base.v1beta1.ICoin|null);

            /**
             * Encodes the specified MsgSendToEthereum message. Does not implicitly {@link gravity.v1.MsgSendToEthereum.verify|verify} messages.
             * @param message MsgSendToEthereum message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgSendToEthereum, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgSendToEthereum message, length delimited. Does not implicitly {@link gravity.v1.MsgSendToEthereum.verify|verify} messages.
             * @param message MsgSendToEthereum message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgSendToEthereum, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgSendToEthereum message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgSendToEthereum
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgSendToEthereum;

            /**
             * Decodes a MsgSendToEthereum message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgSendToEthereum
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgSendToEthereum;

            /**
             * Verifies a MsgSendToEthereum message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgSendToEthereum message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgSendToEthereum
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgSendToEthereum;

            /**
             * Creates a plain object from a MsgSendToEthereum message. Also converts values to other types if specified.
             * @param message MsgSendToEthereum
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgSendToEthereum, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgSendToEthereum to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgSendToEthereumResponse. */
        interface IMsgSendToEthereumResponse {

            /** MsgSendToEthereumResponse id */
            id?: (Long|null);
        }

        /** Represents a MsgSendToEthereumResponse. */
        class MsgSendToEthereumResponse implements IMsgSendToEthereumResponse {

            /**
             * Constructs a new MsgSendToEthereumResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgSendToEthereumResponse);

            /** MsgSendToEthereumResponse id. */
            public id: Long;

            /**
             * Encodes the specified MsgSendToEthereumResponse message. Does not implicitly {@link gravity.v1.MsgSendToEthereumResponse.verify|verify} messages.
             * @param message MsgSendToEthereumResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgSendToEthereumResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgSendToEthereumResponse message, length delimited. Does not implicitly {@link gravity.v1.MsgSendToEthereumResponse.verify|verify} messages.
             * @param message MsgSendToEthereumResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgSendToEthereumResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgSendToEthereumResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgSendToEthereumResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgSendToEthereumResponse;

            /**
             * Decodes a MsgSendToEthereumResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgSendToEthereumResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgSendToEthereumResponse;

            /**
             * Verifies a MsgSendToEthereumResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgSendToEthereumResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgSendToEthereumResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgSendToEthereumResponse;

            /**
             * Creates a plain object from a MsgSendToEthereumResponse message. Also converts values to other types if specified.
             * @param message MsgSendToEthereumResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgSendToEthereumResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgSendToEthereumResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgCancelSendToEthereum. */
        interface IMsgCancelSendToEthereum {

            /** MsgCancelSendToEthereum id */
            id?: (Long|null);

            /** MsgCancelSendToEthereum sender */
            sender?: (string|null);
        }

        /** Represents a MsgCancelSendToEthereum. */
        class MsgCancelSendToEthereum implements IMsgCancelSendToEthereum {

            /**
             * Constructs a new MsgCancelSendToEthereum.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgCancelSendToEthereum);

            /** MsgCancelSendToEthereum id. */
            public id: Long;

            /** MsgCancelSendToEthereum sender. */
            public sender: string;

            /**
             * Encodes the specified MsgCancelSendToEthereum message. Does not implicitly {@link gravity.v1.MsgCancelSendToEthereum.verify|verify} messages.
             * @param message MsgCancelSendToEthereum message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgCancelSendToEthereum, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgCancelSendToEthereum message, length delimited. Does not implicitly {@link gravity.v1.MsgCancelSendToEthereum.verify|verify} messages.
             * @param message MsgCancelSendToEthereum message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgCancelSendToEthereum, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgCancelSendToEthereum message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgCancelSendToEthereum
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgCancelSendToEthereum;

            /**
             * Decodes a MsgCancelSendToEthereum message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgCancelSendToEthereum
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgCancelSendToEthereum;

            /**
             * Verifies a MsgCancelSendToEthereum message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgCancelSendToEthereum message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgCancelSendToEthereum
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgCancelSendToEthereum;

            /**
             * Creates a plain object from a MsgCancelSendToEthereum message. Also converts values to other types if specified.
             * @param message MsgCancelSendToEthereum
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgCancelSendToEthereum, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgCancelSendToEthereum to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgCancelSendToEthereumResponse. */
        interface IMsgCancelSendToEthereumResponse {
        }

        /** Represents a MsgCancelSendToEthereumResponse. */
        class MsgCancelSendToEthereumResponse implements IMsgCancelSendToEthereumResponse {

            /**
             * Constructs a new MsgCancelSendToEthereumResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgCancelSendToEthereumResponse);

            /**
             * Encodes the specified MsgCancelSendToEthereumResponse message. Does not implicitly {@link gravity.v1.MsgCancelSendToEthereumResponse.verify|verify} messages.
             * @param message MsgCancelSendToEthereumResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgCancelSendToEthereumResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgCancelSendToEthereumResponse message, length delimited. Does not implicitly {@link gravity.v1.MsgCancelSendToEthereumResponse.verify|verify} messages.
             * @param message MsgCancelSendToEthereumResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgCancelSendToEthereumResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgCancelSendToEthereumResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgCancelSendToEthereumResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgCancelSendToEthereumResponse;

            /**
             * Decodes a MsgCancelSendToEthereumResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgCancelSendToEthereumResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgCancelSendToEthereumResponse;

            /**
             * Verifies a MsgCancelSendToEthereumResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgCancelSendToEthereumResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgCancelSendToEthereumResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgCancelSendToEthereumResponse;

            /**
             * Creates a plain object from a MsgCancelSendToEthereumResponse message. Also converts values to other types if specified.
             * @param message MsgCancelSendToEthereumResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgCancelSendToEthereumResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgCancelSendToEthereumResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgRequestBatchTx. */
        interface IMsgRequestBatchTx {

            /** MsgRequestBatchTx denom */
            denom?: (string|null);

            /** MsgRequestBatchTx signer */
            signer?: (string|null);
        }

        /** Represents a MsgRequestBatchTx. */
        class MsgRequestBatchTx implements IMsgRequestBatchTx {

            /**
             * Constructs a new MsgRequestBatchTx.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgRequestBatchTx);

            /** MsgRequestBatchTx denom. */
            public denom: string;

            /** MsgRequestBatchTx signer. */
            public signer: string;

            /**
             * Encodes the specified MsgRequestBatchTx message. Does not implicitly {@link gravity.v1.MsgRequestBatchTx.verify|verify} messages.
             * @param message MsgRequestBatchTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgRequestBatchTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgRequestBatchTx message, length delimited. Does not implicitly {@link gravity.v1.MsgRequestBatchTx.verify|verify} messages.
             * @param message MsgRequestBatchTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgRequestBatchTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgRequestBatchTx message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgRequestBatchTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgRequestBatchTx;

            /**
             * Decodes a MsgRequestBatchTx message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgRequestBatchTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgRequestBatchTx;

            /**
             * Verifies a MsgRequestBatchTx message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgRequestBatchTx message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgRequestBatchTx
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgRequestBatchTx;

            /**
             * Creates a plain object from a MsgRequestBatchTx message. Also converts values to other types if specified.
             * @param message MsgRequestBatchTx
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgRequestBatchTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgRequestBatchTx to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgRequestBatchTxResponse. */
        interface IMsgRequestBatchTxResponse {
        }

        /** Represents a MsgRequestBatchTxResponse. */
        class MsgRequestBatchTxResponse implements IMsgRequestBatchTxResponse {

            /**
             * Constructs a new MsgRequestBatchTxResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgRequestBatchTxResponse);

            /**
             * Encodes the specified MsgRequestBatchTxResponse message. Does not implicitly {@link gravity.v1.MsgRequestBatchTxResponse.verify|verify} messages.
             * @param message MsgRequestBatchTxResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgRequestBatchTxResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgRequestBatchTxResponse message, length delimited. Does not implicitly {@link gravity.v1.MsgRequestBatchTxResponse.verify|verify} messages.
             * @param message MsgRequestBatchTxResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgRequestBatchTxResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgRequestBatchTxResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgRequestBatchTxResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgRequestBatchTxResponse;

            /**
             * Decodes a MsgRequestBatchTxResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgRequestBatchTxResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgRequestBatchTxResponse;

            /**
             * Verifies a MsgRequestBatchTxResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgRequestBatchTxResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgRequestBatchTxResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgRequestBatchTxResponse;

            /**
             * Creates a plain object from a MsgRequestBatchTxResponse message. Also converts values to other types if specified.
             * @param message MsgRequestBatchTxResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgRequestBatchTxResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgRequestBatchTxResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgSubmitEthereumTxConfirmation. */
        interface IMsgSubmitEthereumTxConfirmation {

            /** MsgSubmitEthereumTxConfirmation confirmation */
            confirmation?: (google.protobuf.IAny|null);

            /** MsgSubmitEthereumTxConfirmation signer */
            signer?: (string|null);
        }

        /** Represents a MsgSubmitEthereumTxConfirmation. */
        class MsgSubmitEthereumTxConfirmation implements IMsgSubmitEthereumTxConfirmation {

            /**
             * Constructs a new MsgSubmitEthereumTxConfirmation.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgSubmitEthereumTxConfirmation);

            /** MsgSubmitEthereumTxConfirmation confirmation. */
            public confirmation?: (google.protobuf.IAny|null);

            /** MsgSubmitEthereumTxConfirmation signer. */
            public signer: string;

            /**
             * Encodes the specified MsgSubmitEthereumTxConfirmation message. Does not implicitly {@link gravity.v1.MsgSubmitEthereumTxConfirmation.verify|verify} messages.
             * @param message MsgSubmitEthereumTxConfirmation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgSubmitEthereumTxConfirmation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgSubmitEthereumTxConfirmation message, length delimited. Does not implicitly {@link gravity.v1.MsgSubmitEthereumTxConfirmation.verify|verify} messages.
             * @param message MsgSubmitEthereumTxConfirmation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgSubmitEthereumTxConfirmation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgSubmitEthereumTxConfirmation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgSubmitEthereumTxConfirmation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgSubmitEthereumTxConfirmation;

            /**
             * Decodes a MsgSubmitEthereumTxConfirmation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgSubmitEthereumTxConfirmation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgSubmitEthereumTxConfirmation;

            /**
             * Verifies a MsgSubmitEthereumTxConfirmation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgSubmitEthereumTxConfirmation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgSubmitEthereumTxConfirmation
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgSubmitEthereumTxConfirmation;

            /**
             * Creates a plain object from a MsgSubmitEthereumTxConfirmation message. Also converts values to other types if specified.
             * @param message MsgSubmitEthereumTxConfirmation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgSubmitEthereumTxConfirmation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgSubmitEthereumTxConfirmation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ContractCallTxConfirmation. */
        interface IContractCallTxConfirmation {

            /** ContractCallTxConfirmation invalidation_scope */
            invalidation_scope?: (Uint8Array|null);

            /** ContractCallTxConfirmation invalidation_nonce */
            invalidation_nonce?: (Long|null);

            /** ContractCallTxConfirmation ethereum_signer */
            ethereum_signer?: (string|null);

            /** ContractCallTxConfirmation signature */
            signature?: (Uint8Array|null);
        }

        /** Represents a ContractCallTxConfirmation. */
        class ContractCallTxConfirmation implements IContractCallTxConfirmation {

            /**
             * Constructs a new ContractCallTxConfirmation.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IContractCallTxConfirmation);

            /** ContractCallTxConfirmation invalidation_scope. */
            public invalidation_scope: Uint8Array;

            /** ContractCallTxConfirmation invalidation_nonce. */
            public invalidation_nonce: Long;

            /** ContractCallTxConfirmation ethereum_signer. */
            public ethereum_signer: string;

            /** ContractCallTxConfirmation signature. */
            public signature: Uint8Array;

            /**
             * Encodes the specified ContractCallTxConfirmation message. Does not implicitly {@link gravity.v1.ContractCallTxConfirmation.verify|verify} messages.
             * @param message ContractCallTxConfirmation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IContractCallTxConfirmation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ContractCallTxConfirmation message, length delimited. Does not implicitly {@link gravity.v1.ContractCallTxConfirmation.verify|verify} messages.
             * @param message ContractCallTxConfirmation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IContractCallTxConfirmation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ContractCallTxConfirmation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ContractCallTxConfirmation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.ContractCallTxConfirmation;

            /**
             * Decodes a ContractCallTxConfirmation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ContractCallTxConfirmation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.ContractCallTxConfirmation;

            /**
             * Verifies a ContractCallTxConfirmation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ContractCallTxConfirmation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ContractCallTxConfirmation
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.ContractCallTxConfirmation;

            /**
             * Creates a plain object from a ContractCallTxConfirmation message. Also converts values to other types if specified.
             * @param message ContractCallTxConfirmation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.ContractCallTxConfirmation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ContractCallTxConfirmation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BatchTxConfirmation. */
        interface IBatchTxConfirmation {

            /** BatchTxConfirmation token_contract */
            token_contract?: (string|null);

            /** BatchTxConfirmation batch_nonce */
            batch_nonce?: (Long|null);

            /** BatchTxConfirmation ethereum_signer */
            ethereum_signer?: (string|null);

            /** BatchTxConfirmation signature */
            signature?: (Uint8Array|null);
        }

        /** Represents a BatchTxConfirmation. */
        class BatchTxConfirmation implements IBatchTxConfirmation {

            /**
             * Constructs a new BatchTxConfirmation.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IBatchTxConfirmation);

            /** BatchTxConfirmation token_contract. */
            public token_contract: string;

            /** BatchTxConfirmation batch_nonce. */
            public batch_nonce: Long;

            /** BatchTxConfirmation ethereum_signer. */
            public ethereum_signer: string;

            /** BatchTxConfirmation signature. */
            public signature: Uint8Array;

            /**
             * Encodes the specified BatchTxConfirmation message. Does not implicitly {@link gravity.v1.BatchTxConfirmation.verify|verify} messages.
             * @param message BatchTxConfirmation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IBatchTxConfirmation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchTxConfirmation message, length delimited. Does not implicitly {@link gravity.v1.BatchTxConfirmation.verify|verify} messages.
             * @param message BatchTxConfirmation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IBatchTxConfirmation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchTxConfirmation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchTxConfirmation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.BatchTxConfirmation;

            /**
             * Decodes a BatchTxConfirmation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchTxConfirmation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.BatchTxConfirmation;

            /**
             * Verifies a BatchTxConfirmation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchTxConfirmation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchTxConfirmation
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.BatchTxConfirmation;

            /**
             * Creates a plain object from a BatchTxConfirmation message. Also converts values to other types if specified.
             * @param message BatchTxConfirmation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.BatchTxConfirmation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchTxConfirmation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SignerSetTxConfirmation. */
        interface ISignerSetTxConfirmation {

            /** SignerSetTxConfirmation signer_set_nonce */
            signer_set_nonce?: (Long|null);

            /** SignerSetTxConfirmation ethereum_signer */
            ethereum_signer?: (string|null);

            /** SignerSetTxConfirmation signature */
            signature?: (Uint8Array|null);
        }

        /** Represents a SignerSetTxConfirmation. */
        class SignerSetTxConfirmation implements ISignerSetTxConfirmation {

            /**
             * Constructs a new SignerSetTxConfirmation.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.ISignerSetTxConfirmation);

            /** SignerSetTxConfirmation signer_set_nonce. */
            public signer_set_nonce: Long;

            /** SignerSetTxConfirmation ethereum_signer. */
            public ethereum_signer: string;

            /** SignerSetTxConfirmation signature. */
            public signature: Uint8Array;

            /**
             * Encodes the specified SignerSetTxConfirmation message. Does not implicitly {@link gravity.v1.SignerSetTxConfirmation.verify|verify} messages.
             * @param message SignerSetTxConfirmation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.ISignerSetTxConfirmation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SignerSetTxConfirmation message, length delimited. Does not implicitly {@link gravity.v1.SignerSetTxConfirmation.verify|verify} messages.
             * @param message SignerSetTxConfirmation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.ISignerSetTxConfirmation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SignerSetTxConfirmation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SignerSetTxConfirmation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.SignerSetTxConfirmation;

            /**
             * Decodes a SignerSetTxConfirmation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SignerSetTxConfirmation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.SignerSetTxConfirmation;

            /**
             * Verifies a SignerSetTxConfirmation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SignerSetTxConfirmation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SignerSetTxConfirmation
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.SignerSetTxConfirmation;

            /**
             * Creates a plain object from a SignerSetTxConfirmation message. Also converts values to other types if specified.
             * @param message SignerSetTxConfirmation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.SignerSetTxConfirmation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SignerSetTxConfirmation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgSubmitEthereumTxConfirmationResponse. */
        interface IMsgSubmitEthereumTxConfirmationResponse {
        }

        /** Represents a MsgSubmitEthereumTxConfirmationResponse. */
        class MsgSubmitEthereumTxConfirmationResponse implements IMsgSubmitEthereumTxConfirmationResponse {

            /**
             * Constructs a new MsgSubmitEthereumTxConfirmationResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgSubmitEthereumTxConfirmationResponse);

            /**
             * Encodes the specified MsgSubmitEthereumTxConfirmationResponse message. Does not implicitly {@link gravity.v1.MsgSubmitEthereumTxConfirmationResponse.verify|verify} messages.
             * @param message MsgSubmitEthereumTxConfirmationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgSubmitEthereumTxConfirmationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgSubmitEthereumTxConfirmationResponse message, length delimited. Does not implicitly {@link gravity.v1.MsgSubmitEthereumTxConfirmationResponse.verify|verify} messages.
             * @param message MsgSubmitEthereumTxConfirmationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgSubmitEthereumTxConfirmationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgSubmitEthereumTxConfirmationResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgSubmitEthereumTxConfirmationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgSubmitEthereumTxConfirmationResponse;

            /**
             * Decodes a MsgSubmitEthereumTxConfirmationResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgSubmitEthereumTxConfirmationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgSubmitEthereumTxConfirmationResponse;

            /**
             * Verifies a MsgSubmitEthereumTxConfirmationResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgSubmitEthereumTxConfirmationResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgSubmitEthereumTxConfirmationResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgSubmitEthereumTxConfirmationResponse;

            /**
             * Creates a plain object from a MsgSubmitEthereumTxConfirmationResponse message. Also converts values to other types if specified.
             * @param message MsgSubmitEthereumTxConfirmationResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgSubmitEthereumTxConfirmationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgSubmitEthereumTxConfirmationResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgSubmitEthereumEvent. */
        interface IMsgSubmitEthereumEvent {

            /** MsgSubmitEthereumEvent event */
            event?: (google.protobuf.IAny|null);

            /** MsgSubmitEthereumEvent signer */
            signer?: (string|null);
        }

        /** Represents a MsgSubmitEthereumEvent. */
        class MsgSubmitEthereumEvent implements IMsgSubmitEthereumEvent {

            /**
             * Constructs a new MsgSubmitEthereumEvent.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgSubmitEthereumEvent);

            /** MsgSubmitEthereumEvent event. */
            public event?: (google.protobuf.IAny|null);

            /** MsgSubmitEthereumEvent signer. */
            public signer: string;

            /**
             * Encodes the specified MsgSubmitEthereumEvent message. Does not implicitly {@link gravity.v1.MsgSubmitEthereumEvent.verify|verify} messages.
             * @param message MsgSubmitEthereumEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgSubmitEthereumEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgSubmitEthereumEvent message, length delimited. Does not implicitly {@link gravity.v1.MsgSubmitEthereumEvent.verify|verify} messages.
             * @param message MsgSubmitEthereumEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgSubmitEthereumEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgSubmitEthereumEvent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgSubmitEthereumEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgSubmitEthereumEvent;

            /**
             * Decodes a MsgSubmitEthereumEvent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgSubmitEthereumEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgSubmitEthereumEvent;

            /**
             * Verifies a MsgSubmitEthereumEvent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgSubmitEthereumEvent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgSubmitEthereumEvent
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgSubmitEthereumEvent;

            /**
             * Creates a plain object from a MsgSubmitEthereumEvent message. Also converts values to other types if specified.
             * @param message MsgSubmitEthereumEvent
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgSubmitEthereumEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgSubmitEthereumEvent to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgSubmitEthereumEventResponse. */
        interface IMsgSubmitEthereumEventResponse {
        }

        /** Represents a MsgSubmitEthereumEventResponse. */
        class MsgSubmitEthereumEventResponse implements IMsgSubmitEthereumEventResponse {

            /**
             * Constructs a new MsgSubmitEthereumEventResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgSubmitEthereumEventResponse);

            /**
             * Encodes the specified MsgSubmitEthereumEventResponse message. Does not implicitly {@link gravity.v1.MsgSubmitEthereumEventResponse.verify|verify} messages.
             * @param message MsgSubmitEthereumEventResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgSubmitEthereumEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgSubmitEthereumEventResponse message, length delimited. Does not implicitly {@link gravity.v1.MsgSubmitEthereumEventResponse.verify|verify} messages.
             * @param message MsgSubmitEthereumEventResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgSubmitEthereumEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgSubmitEthereumEventResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgSubmitEthereumEventResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgSubmitEthereumEventResponse;

            /**
             * Decodes a MsgSubmitEthereumEventResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgSubmitEthereumEventResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgSubmitEthereumEventResponse;

            /**
             * Verifies a MsgSubmitEthereumEventResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgSubmitEthereumEventResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgSubmitEthereumEventResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgSubmitEthereumEventResponse;

            /**
             * Creates a plain object from a MsgSubmitEthereumEventResponse message. Also converts values to other types if specified.
             * @param message MsgSubmitEthereumEventResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgSubmitEthereumEventResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgSubmitEthereumEventResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgDelegateKeys. */
        interface IMsgDelegateKeys {

            /** MsgDelegateKeys validator_address */
            validator_address?: (string|null);

            /** MsgDelegateKeys orchestrator_address */
            orchestrator_address?: (string|null);

            /** MsgDelegateKeys ethereum_address */
            ethereum_address?: (string|null);

            /** MsgDelegateKeys eth_signature */
            eth_signature?: (Uint8Array|null);
        }

        /** Represents a MsgDelegateKeys. */
        class MsgDelegateKeys implements IMsgDelegateKeys {

            /**
             * Constructs a new MsgDelegateKeys.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgDelegateKeys);

            /** MsgDelegateKeys validator_address. */
            public validator_address: string;

            /** MsgDelegateKeys orchestrator_address. */
            public orchestrator_address: string;

            /** MsgDelegateKeys ethereum_address. */
            public ethereum_address: string;

            /** MsgDelegateKeys eth_signature. */
            public eth_signature: Uint8Array;

            /**
             * Encodes the specified MsgDelegateKeys message. Does not implicitly {@link gravity.v1.MsgDelegateKeys.verify|verify} messages.
             * @param message MsgDelegateKeys message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgDelegateKeys, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgDelegateKeys message, length delimited. Does not implicitly {@link gravity.v1.MsgDelegateKeys.verify|verify} messages.
             * @param message MsgDelegateKeys message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgDelegateKeys, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgDelegateKeys message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgDelegateKeys
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgDelegateKeys;

            /**
             * Decodes a MsgDelegateKeys message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgDelegateKeys
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgDelegateKeys;

            /**
             * Verifies a MsgDelegateKeys message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgDelegateKeys message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgDelegateKeys
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgDelegateKeys;

            /**
             * Creates a plain object from a MsgDelegateKeys message. Also converts values to other types if specified.
             * @param message MsgDelegateKeys
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgDelegateKeys, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgDelegateKeys to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgDelegateKeysResponse. */
        interface IMsgDelegateKeysResponse {
        }

        /** Represents a MsgDelegateKeysResponse. */
        class MsgDelegateKeysResponse implements IMsgDelegateKeysResponse {

            /**
             * Constructs a new MsgDelegateKeysResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgDelegateKeysResponse);

            /**
             * Encodes the specified MsgDelegateKeysResponse message. Does not implicitly {@link gravity.v1.MsgDelegateKeysResponse.verify|verify} messages.
             * @param message MsgDelegateKeysResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgDelegateKeysResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgDelegateKeysResponse message, length delimited. Does not implicitly {@link gravity.v1.MsgDelegateKeysResponse.verify|verify} messages.
             * @param message MsgDelegateKeysResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgDelegateKeysResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgDelegateKeysResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgDelegateKeysResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgDelegateKeysResponse;

            /**
             * Decodes a MsgDelegateKeysResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgDelegateKeysResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgDelegateKeysResponse;

            /**
             * Verifies a MsgDelegateKeysResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgDelegateKeysResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgDelegateKeysResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgDelegateKeysResponse;

            /**
             * Creates a plain object from a MsgDelegateKeysResponse message. Also converts values to other types if specified.
             * @param message MsgDelegateKeysResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgDelegateKeysResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgDelegateKeysResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DelegateKeysSignMsg. */
        interface IDelegateKeysSignMsg {

            /** DelegateKeysSignMsg validator_address */
            validator_address?: (string|null);

            /** DelegateKeysSignMsg nonce */
            nonce?: (Long|null);
        }

        /** Represents a DelegateKeysSignMsg. */
        class DelegateKeysSignMsg implements IDelegateKeysSignMsg {

            /**
             * Constructs a new DelegateKeysSignMsg.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IDelegateKeysSignMsg);

            /** DelegateKeysSignMsg validator_address. */
            public validator_address: string;

            /** DelegateKeysSignMsg nonce. */
            public nonce: Long;

            /**
             * Encodes the specified DelegateKeysSignMsg message. Does not implicitly {@link gravity.v1.DelegateKeysSignMsg.verify|verify} messages.
             * @param message DelegateKeysSignMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IDelegateKeysSignMsg, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DelegateKeysSignMsg message, length delimited. Does not implicitly {@link gravity.v1.DelegateKeysSignMsg.verify|verify} messages.
             * @param message DelegateKeysSignMsg message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IDelegateKeysSignMsg, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DelegateKeysSignMsg message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DelegateKeysSignMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.DelegateKeysSignMsg;

            /**
             * Decodes a DelegateKeysSignMsg message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DelegateKeysSignMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.DelegateKeysSignMsg;

            /**
             * Verifies a DelegateKeysSignMsg message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DelegateKeysSignMsg message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DelegateKeysSignMsg
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.DelegateKeysSignMsg;

            /**
             * Creates a plain object from a DelegateKeysSignMsg message. Also converts values to other types if specified.
             * @param message DelegateKeysSignMsg
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.DelegateKeysSignMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DelegateKeysSignMsg to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SendToCosmosEvent. */
        interface ISendToCosmosEvent {

            /** SendToCosmosEvent event_nonce */
            event_nonce?: (Long|null);

            /** SendToCosmosEvent token_contract */
            token_contract?: (string|null);

            /** SendToCosmosEvent amount */
            amount?: (string|null);

            /** SendToCosmosEvent ethereum_sender */
            ethereum_sender?: (string|null);

            /** SendToCosmosEvent cosmos_receiver */
            cosmos_receiver?: (string|null);

            /** SendToCosmosEvent ethereum_height */
            ethereum_height?: (Long|null);
        }

        /** Represents a SendToCosmosEvent. */
        class SendToCosmosEvent implements ISendToCosmosEvent {

            /**
             * Constructs a new SendToCosmosEvent.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.ISendToCosmosEvent);

            /** SendToCosmosEvent event_nonce. */
            public event_nonce: Long;

            /** SendToCosmosEvent token_contract. */
            public token_contract: string;

            /** SendToCosmosEvent amount. */
            public amount: string;

            /** SendToCosmosEvent ethereum_sender. */
            public ethereum_sender: string;

            /** SendToCosmosEvent cosmos_receiver. */
            public cosmos_receiver: string;

            /** SendToCosmosEvent ethereum_height. */
            public ethereum_height: Long;

            /**
             * Encodes the specified SendToCosmosEvent message. Does not implicitly {@link gravity.v1.SendToCosmosEvent.verify|verify} messages.
             * @param message SendToCosmosEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.ISendToCosmosEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SendToCosmosEvent message, length delimited. Does not implicitly {@link gravity.v1.SendToCosmosEvent.verify|verify} messages.
             * @param message SendToCosmosEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.ISendToCosmosEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SendToCosmosEvent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SendToCosmosEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.SendToCosmosEvent;

            /**
             * Decodes a SendToCosmosEvent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SendToCosmosEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.SendToCosmosEvent;

            /**
             * Verifies a SendToCosmosEvent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SendToCosmosEvent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SendToCosmosEvent
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.SendToCosmosEvent;

            /**
             * Creates a plain object from a SendToCosmosEvent message. Also converts values to other types if specified.
             * @param message SendToCosmosEvent
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.SendToCosmosEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SendToCosmosEvent to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BatchExecutedEvent. */
        interface IBatchExecutedEvent {

            /** BatchExecutedEvent token_contract */
            token_contract?: (string|null);

            /** BatchExecutedEvent event_nonce */
            event_nonce?: (Long|null);

            /** BatchExecutedEvent ethereum_height */
            ethereum_height?: (Long|null);

            /** BatchExecutedEvent batch_nonce */
            batch_nonce?: (Long|null);
        }

        /** Represents a BatchExecutedEvent. */
        class BatchExecutedEvent implements IBatchExecutedEvent {

            /**
             * Constructs a new BatchExecutedEvent.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IBatchExecutedEvent);

            /** BatchExecutedEvent token_contract. */
            public token_contract: string;

            /** BatchExecutedEvent event_nonce. */
            public event_nonce: Long;

            /** BatchExecutedEvent ethereum_height. */
            public ethereum_height: Long;

            /** BatchExecutedEvent batch_nonce. */
            public batch_nonce: Long;

            /**
             * Encodes the specified BatchExecutedEvent message. Does not implicitly {@link gravity.v1.BatchExecutedEvent.verify|verify} messages.
             * @param message BatchExecutedEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IBatchExecutedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchExecutedEvent message, length delimited. Does not implicitly {@link gravity.v1.BatchExecutedEvent.verify|verify} messages.
             * @param message BatchExecutedEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IBatchExecutedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchExecutedEvent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchExecutedEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.BatchExecutedEvent;

            /**
             * Decodes a BatchExecutedEvent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchExecutedEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.BatchExecutedEvent;

            /**
             * Verifies a BatchExecutedEvent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchExecutedEvent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchExecutedEvent
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.BatchExecutedEvent;

            /**
             * Creates a plain object from a BatchExecutedEvent message. Also converts values to other types if specified.
             * @param message BatchExecutedEvent
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.BatchExecutedEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchExecutedEvent to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ContractCallExecutedEvent. */
        interface IContractCallExecutedEvent {

            /** ContractCallExecutedEvent event_nonce */
            event_nonce?: (Long|null);

            /** ContractCallExecutedEvent invalidation_scope */
            invalidation_scope?: (Uint8Array|null);

            /** ContractCallExecutedEvent invalidation_nonce */
            invalidation_nonce?: (Long|null);

            /** ContractCallExecutedEvent ethereum_height */
            ethereum_height?: (Long|null);
        }

        /** Represents a ContractCallExecutedEvent. */
        class ContractCallExecutedEvent implements IContractCallExecutedEvent {

            /**
             * Constructs a new ContractCallExecutedEvent.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IContractCallExecutedEvent);

            /** ContractCallExecutedEvent event_nonce. */
            public event_nonce: Long;

            /** ContractCallExecutedEvent invalidation_scope. */
            public invalidation_scope: Uint8Array;

            /** ContractCallExecutedEvent invalidation_nonce. */
            public invalidation_nonce: Long;

            /** ContractCallExecutedEvent ethereum_height. */
            public ethereum_height: Long;

            /**
             * Encodes the specified ContractCallExecutedEvent message. Does not implicitly {@link gravity.v1.ContractCallExecutedEvent.verify|verify} messages.
             * @param message ContractCallExecutedEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IContractCallExecutedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ContractCallExecutedEvent message, length delimited. Does not implicitly {@link gravity.v1.ContractCallExecutedEvent.verify|verify} messages.
             * @param message ContractCallExecutedEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IContractCallExecutedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ContractCallExecutedEvent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ContractCallExecutedEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.ContractCallExecutedEvent;

            /**
             * Decodes a ContractCallExecutedEvent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ContractCallExecutedEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.ContractCallExecutedEvent;

            /**
             * Verifies a ContractCallExecutedEvent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ContractCallExecutedEvent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ContractCallExecutedEvent
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.ContractCallExecutedEvent;

            /**
             * Creates a plain object from a ContractCallExecutedEvent message. Also converts values to other types if specified.
             * @param message ContractCallExecutedEvent
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.ContractCallExecutedEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ContractCallExecutedEvent to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ERC20DeployedEvent. */
        interface IERC20DeployedEvent {

            /** ERC20DeployedEvent event_nonce */
            event_nonce?: (Long|null);

            /** ERC20DeployedEvent cosmos_denom */
            cosmos_denom?: (string|null);

            /** ERC20DeployedEvent token_contract */
            token_contract?: (string|null);

            /** ERC20DeployedEvent erc20_name */
            erc20_name?: (string|null);

            /** ERC20DeployedEvent erc20_symbol */
            erc20_symbol?: (string|null);

            /** ERC20DeployedEvent erc20_decimals */
            erc20_decimals?: (Long|null);

            /** ERC20DeployedEvent ethereum_height */
            ethereum_height?: (Long|null);
        }

        /** Represents a ERC20DeployedEvent. */
        class ERC20DeployedEvent implements IERC20DeployedEvent {

            /**
             * Constructs a new ERC20DeployedEvent.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IERC20DeployedEvent);

            /** ERC20DeployedEvent event_nonce. */
            public event_nonce: Long;

            /** ERC20DeployedEvent cosmos_denom. */
            public cosmos_denom: string;

            /** ERC20DeployedEvent token_contract. */
            public token_contract: string;

            /** ERC20DeployedEvent erc20_name. */
            public erc20_name: string;

            /** ERC20DeployedEvent erc20_symbol. */
            public erc20_symbol: string;

            /** ERC20DeployedEvent erc20_decimals. */
            public erc20_decimals: Long;

            /** ERC20DeployedEvent ethereum_height. */
            public ethereum_height: Long;

            /**
             * Encodes the specified ERC20DeployedEvent message. Does not implicitly {@link gravity.v1.ERC20DeployedEvent.verify|verify} messages.
             * @param message ERC20DeployedEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IERC20DeployedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ERC20DeployedEvent message, length delimited. Does not implicitly {@link gravity.v1.ERC20DeployedEvent.verify|verify} messages.
             * @param message ERC20DeployedEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IERC20DeployedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ERC20DeployedEvent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ERC20DeployedEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.ERC20DeployedEvent;

            /**
             * Decodes a ERC20DeployedEvent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ERC20DeployedEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.ERC20DeployedEvent;

            /**
             * Verifies a ERC20DeployedEvent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ERC20DeployedEvent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ERC20DeployedEvent
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.ERC20DeployedEvent;

            /**
             * Creates a plain object from a ERC20DeployedEvent message. Also converts values to other types if specified.
             * @param message ERC20DeployedEvent
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.ERC20DeployedEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ERC20DeployedEvent to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SignerSetTxExecutedEvent. */
        interface ISignerSetTxExecutedEvent {

            /** SignerSetTxExecutedEvent event_nonce */
            event_nonce?: (Long|null);

            /** SignerSetTxExecutedEvent signer_set_tx_nonce */
            signer_set_tx_nonce?: (Long|null);

            /** SignerSetTxExecutedEvent ethereum_height */
            ethereum_height?: (Long|null);

            /** SignerSetTxExecutedEvent members */
            members?: (gravity.v1.IEthereumSigner[]|null);
        }

        /** Represents a SignerSetTxExecutedEvent. */
        class SignerSetTxExecutedEvent implements ISignerSetTxExecutedEvent {

            /**
             * Constructs a new SignerSetTxExecutedEvent.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.ISignerSetTxExecutedEvent);

            /** SignerSetTxExecutedEvent event_nonce. */
            public event_nonce: Long;

            /** SignerSetTxExecutedEvent signer_set_tx_nonce. */
            public signer_set_tx_nonce: Long;

            /** SignerSetTxExecutedEvent ethereum_height. */
            public ethereum_height: Long;

            /** SignerSetTxExecutedEvent members. */
            public members: gravity.v1.IEthereumSigner[];

            /**
             * Encodes the specified SignerSetTxExecutedEvent message. Does not implicitly {@link gravity.v1.SignerSetTxExecutedEvent.verify|verify} messages.
             * @param message SignerSetTxExecutedEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.ISignerSetTxExecutedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SignerSetTxExecutedEvent message, length delimited. Does not implicitly {@link gravity.v1.SignerSetTxExecutedEvent.verify|verify} messages.
             * @param message SignerSetTxExecutedEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.ISignerSetTxExecutedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SignerSetTxExecutedEvent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SignerSetTxExecutedEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.SignerSetTxExecutedEvent;

            /**
             * Decodes a SignerSetTxExecutedEvent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SignerSetTxExecutedEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.SignerSetTxExecutedEvent;

            /**
             * Verifies a SignerSetTxExecutedEvent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SignerSetTxExecutedEvent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SignerSetTxExecutedEvent
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.SignerSetTxExecutedEvent;

            /**
             * Creates a plain object from a SignerSetTxExecutedEvent message. Also converts values to other types if specified.
             * @param message SignerSetTxExecutedEvent
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.SignerSetTxExecutedEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SignerSetTxExecutedEvent to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Namespace cosmos. */
export namespace cosmos {

    /** Namespace base. */
    namespace base {

        /** Namespace v1beta1. */
        namespace v1beta1 {

            /** Properties of a Coin. */
            interface ICoin {

                /** Coin denom */
                denom?: (string|null);

                /** Coin amount */
                amount?: (string|null);
            }

            /** Represents a Coin. */
            class Coin implements ICoin {

                /**
                 * Constructs a new Coin.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.base.v1beta1.ICoin);

                /** Coin denom. */
                public denom: string;

                /** Coin amount. */
                public amount: string;

                /**
                 * Encodes the specified Coin message. Does not implicitly {@link cosmos.base.v1beta1.Coin.verify|verify} messages.
                 * @param message Coin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.base.v1beta1.ICoin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Coin message, length delimited. Does not implicitly {@link cosmos.base.v1beta1.Coin.verify|verify} messages.
                 * @param message Coin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.base.v1beta1.ICoin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Coin message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Coin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.v1beta1.Coin;

                /**
                 * Decodes a Coin message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Coin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.v1beta1.Coin;

                /**
                 * Verifies a Coin message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Coin message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Coin
                 */
                public static fromObject(object: { [k: string]: any }): cosmos.base.v1beta1.Coin;

                /**
                 * Creates a plain object from a Coin message. Also converts values to other types if specified.
                 * @param message Coin
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.base.v1beta1.Coin, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Coin to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DecCoin. */
            interface IDecCoin {

                /** DecCoin denom */
                denom?: (string|null);

                /** DecCoin amount */
                amount?: (string|null);
            }

            /** Represents a DecCoin. */
            class DecCoin implements IDecCoin {

                /**
                 * Constructs a new DecCoin.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.base.v1beta1.IDecCoin);

                /** DecCoin denom. */
                public denom: string;

                /** DecCoin amount. */
                public amount: string;

                /**
                 * Encodes the specified DecCoin message. Does not implicitly {@link cosmos.base.v1beta1.DecCoin.verify|verify} messages.
                 * @param message DecCoin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.base.v1beta1.IDecCoin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DecCoin message, length delimited. Does not implicitly {@link cosmos.base.v1beta1.DecCoin.verify|verify} messages.
                 * @param message DecCoin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.base.v1beta1.IDecCoin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DecCoin message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DecCoin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.v1beta1.DecCoin;

                /**
                 * Decodes a DecCoin message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DecCoin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.v1beta1.DecCoin;

                /**
                 * Verifies a DecCoin message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DecCoin message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DecCoin
                 */
                public static fromObject(object: { [k: string]: any }): cosmos.base.v1beta1.DecCoin;

                /**
                 * Creates a plain object from a DecCoin message. Also converts values to other types if specified.
                 * @param message DecCoin
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.base.v1beta1.DecCoin, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DecCoin to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an IntProto. */
            interface IIntProto {

                /** IntProto int */
                int?: (string|null);
            }

            /** Represents an IntProto. */
            class IntProto implements IIntProto {

                /**
                 * Constructs a new IntProto.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.base.v1beta1.IIntProto);

                /** IntProto int. */
                public int: string;

                /**
                 * Encodes the specified IntProto message. Does not implicitly {@link cosmos.base.v1beta1.IntProto.verify|verify} messages.
                 * @param message IntProto message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.base.v1beta1.IIntProto, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified IntProto message, length delimited. Does not implicitly {@link cosmos.base.v1beta1.IntProto.verify|verify} messages.
                 * @param message IntProto message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.base.v1beta1.IIntProto, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an IntProto message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns IntProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.v1beta1.IntProto;

                /**
                 * Decodes an IntProto message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns IntProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.v1beta1.IntProto;

                /**
                 * Verifies an IntProto message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an IntProto message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns IntProto
                 */
                public static fromObject(object: { [k: string]: any }): cosmos.base.v1beta1.IntProto;

                /**
                 * Creates a plain object from an IntProto message. Also converts values to other types if specified.
                 * @param message IntProto
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.base.v1beta1.IntProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this IntProto to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DecProto. */
            interface IDecProto {

                /** DecProto dec */
                dec?: (string|null);
            }

            /** Represents a DecProto. */
            class DecProto implements IDecProto {

                /**
                 * Constructs a new DecProto.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.base.v1beta1.IDecProto);

                /** DecProto dec. */
                public dec: string;

                /**
                 * Encodes the specified DecProto message. Does not implicitly {@link cosmos.base.v1beta1.DecProto.verify|verify} messages.
                 * @param message DecProto message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.base.v1beta1.IDecProto, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DecProto message, length delimited. Does not implicitly {@link cosmos.base.v1beta1.DecProto.verify|verify} messages.
                 * @param message DecProto message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.base.v1beta1.IDecProto, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DecProto message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DecProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.v1beta1.DecProto;

                /**
                 * Decodes a DecProto message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DecProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.v1beta1.DecProto;

                /**
                 * Verifies a DecProto message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DecProto message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DecProto
                 */
                public static fromObject(object: { [k: string]: any }): cosmos.base.v1beta1.DecProto;

                /**
                 * Creates a plain object from a DecProto message. Also converts values to other types if specified.
                 * @param message DecProto
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.base.v1beta1.DecProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DecProto to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace query. */
        namespace query {

            /** Namespace v1beta1. */
            namespace v1beta1 {

                /** Properties of a PageRequest. */
                interface IPageRequest {

                    /** PageRequest key */
                    key?: (Uint8Array|null);

                    /** PageRequest offset */
                    offset?: (Long|null);

                    /** PageRequest limit */
                    limit?: (Long|null);

                    /** PageRequest count_total */
                    count_total?: (boolean|null);

                    /** PageRequest reverse */
                    reverse?: (boolean|null);
                }

                /** Represents a PageRequest. */
                class PageRequest implements IPageRequest {

                    /**
                     * Constructs a new PageRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: cosmos.base.query.v1beta1.IPageRequest);

                    /** PageRequest key. */
                    public key: Uint8Array;

                    /** PageRequest offset. */
                    public offset: Long;

                    /** PageRequest limit. */
                    public limit: Long;

                    /** PageRequest count_total. */
                    public count_total: boolean;

                    /** PageRequest reverse. */
                    public reverse: boolean;

                    /**
                     * Encodes the specified PageRequest message. Does not implicitly {@link cosmos.base.query.v1beta1.PageRequest.verify|verify} messages.
                     * @param message PageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: cosmos.base.query.v1beta1.IPageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PageRequest message, length delimited. Does not implicitly {@link cosmos.base.query.v1beta1.PageRequest.verify|verify} messages.
                     * @param message PageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: cosmos.base.query.v1beta1.IPageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PageRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.query.v1beta1.PageRequest;

                    /**
                     * Decodes a PageRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.query.v1beta1.PageRequest;

                    /**
                     * Verifies a PageRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PageRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PageRequest
                     */
                    public static fromObject(object: { [k: string]: any }): cosmos.base.query.v1beta1.PageRequest;

                    /**
                     * Creates a plain object from a PageRequest message. Also converts values to other types if specified.
                     * @param message PageRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: cosmos.base.query.v1beta1.PageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PageRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PageResponse. */
                interface IPageResponse {

                    /** PageResponse next_key */
                    next_key?: (Uint8Array|null);

                    /** PageResponse total */
                    total?: (Long|null);
                }

                /** Represents a PageResponse. */
                class PageResponse implements IPageResponse {

                    /**
                     * Constructs a new PageResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: cosmos.base.query.v1beta1.IPageResponse);

                    /** PageResponse next_key. */
                    public next_key: Uint8Array;

                    /** PageResponse total. */
                    public total: Long;

                    /**
                     * Encodes the specified PageResponse message. Does not implicitly {@link cosmos.base.query.v1beta1.PageResponse.verify|verify} messages.
                     * @param message PageResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: cosmos.base.query.v1beta1.IPageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PageResponse message, length delimited. Does not implicitly {@link cosmos.base.query.v1beta1.PageResponse.verify|verify} messages.
                     * @param message PageResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: cosmos.base.query.v1beta1.IPageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PageResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PageResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.query.v1beta1.PageResponse;

                    /**
                     * Decodes a PageResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PageResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.query.v1beta1.PageResponse;

                    /**
                     * Verifies a PageResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PageResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PageResponse
                     */
                    public static fromObject(object: { [k: string]: any }): cosmos.base.query.v1beta1.PageResponse;

                    /**
                     * Creates a plain object from a PageResponse message. Also converts values to other types if specified.
                     * @param message PageResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: cosmos.base.query.v1beta1.PageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PageResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }
}

/** Namespace tendermint. */
export namespace tendermint {

    /** Namespace abci. */
    namespace abci {

        /** Properties of a Request. */
        interface IRequest {

            /** Request echo */
            echo?: (tendermint.abci.IRequestEcho|null);

            /** Request flush */
            flush?: (tendermint.abci.IRequestFlush|null);

            /** Request info */
            info?: (tendermint.abci.IRequestInfo|null);

            /** Request set_option */
            set_option?: (tendermint.abci.IRequestSetOption|null);

            /** Request init_chain */
            init_chain?: (tendermint.abci.IRequestInitChain|null);

            /** Request query */
            query?: (tendermint.abci.IRequestQuery|null);

            /** Request begin_block */
            begin_block?: (tendermint.abci.IRequestBeginBlock|null);

            /** Request check_tx */
            check_tx?: (tendermint.abci.IRequestCheckTx|null);

            /** Request deliver_tx */
            deliver_tx?: (tendermint.abci.IRequestDeliverTx|null);

            /** Request end_block */
            end_block?: (tendermint.abci.IRequestEndBlock|null);

            /** Request commit */
            commit?: (tendermint.abci.IRequestCommit|null);

            /** Request list_snapshots */
            list_snapshots?: (tendermint.abci.IRequestListSnapshots|null);

            /** Request offer_snapshot */
            offer_snapshot?: (tendermint.abci.IRequestOfferSnapshot|null);

            /** Request load_snapshot_chunk */
            load_snapshot_chunk?: (tendermint.abci.IRequestLoadSnapshotChunk|null);

            /** Request apply_snapshot_chunk */
            apply_snapshot_chunk?: (tendermint.abci.IRequestApplySnapshotChunk|null);
        }

        /** Represents a Request. */
        class Request implements IRequest {

            /**
             * Constructs a new Request.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequest);

            /** Request echo. */
            public echo?: (tendermint.abci.IRequestEcho|null);

            /** Request flush. */
            public flush?: (tendermint.abci.IRequestFlush|null);

            /** Request info. */
            public info?: (tendermint.abci.IRequestInfo|null);

            /** Request set_option. */
            public set_option?: (tendermint.abci.IRequestSetOption|null);

            /** Request init_chain. */
            public init_chain?: (tendermint.abci.IRequestInitChain|null);

            /** Request query. */
            public query?: (tendermint.abci.IRequestQuery|null);

            /** Request begin_block. */
            public begin_block?: (tendermint.abci.IRequestBeginBlock|null);

            /** Request check_tx. */
            public check_tx?: (tendermint.abci.IRequestCheckTx|null);

            /** Request deliver_tx. */
            public deliver_tx?: (tendermint.abci.IRequestDeliverTx|null);

            /** Request end_block. */
            public end_block?: (tendermint.abci.IRequestEndBlock|null);

            /** Request commit. */
            public commit?: (tendermint.abci.IRequestCommit|null);

            /** Request list_snapshots. */
            public list_snapshots?: (tendermint.abci.IRequestListSnapshots|null);

            /** Request offer_snapshot. */
            public offer_snapshot?: (tendermint.abci.IRequestOfferSnapshot|null);

            /** Request load_snapshot_chunk. */
            public load_snapshot_chunk?: (tendermint.abci.IRequestLoadSnapshotChunk|null);

            /** Request apply_snapshot_chunk. */
            public apply_snapshot_chunk?: (tendermint.abci.IRequestApplySnapshotChunk|null);

            /** Request value. */
            public value?: ("echo"|"flush"|"info"|"set_option"|"init_chain"|"query"|"begin_block"|"check_tx"|"deliver_tx"|"end_block"|"commit"|"list_snapshots"|"offer_snapshot"|"load_snapshot_chunk"|"apply_snapshot_chunk");

            /**
             * Encodes the specified Request message. Does not implicitly {@link tendermint.abci.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link tendermint.abci.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.Request;

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.Request;

            /**
             * Verifies a Request message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Request message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Request
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.Request;

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @param message Request
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Request to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestEcho. */
        interface IRequestEcho {

            /** RequestEcho message */
            message?: (string|null);
        }

        /** Represents a RequestEcho. */
        class RequestEcho implements IRequestEcho {

            /**
             * Constructs a new RequestEcho.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestEcho);

            /** RequestEcho message. */
            public message: string;

            /**
             * Encodes the specified RequestEcho message. Does not implicitly {@link tendermint.abci.RequestEcho.verify|verify} messages.
             * @param message RequestEcho message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestEcho, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestEcho message, length delimited. Does not implicitly {@link tendermint.abci.RequestEcho.verify|verify} messages.
             * @param message RequestEcho message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestEcho, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestEcho message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestEcho
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestEcho;

            /**
             * Decodes a RequestEcho message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestEcho
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestEcho;

            /**
             * Verifies a RequestEcho message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestEcho message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestEcho
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestEcho;

            /**
             * Creates a plain object from a RequestEcho message. Also converts values to other types if specified.
             * @param message RequestEcho
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestEcho, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestEcho to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestFlush. */
        interface IRequestFlush {
        }

        /** Represents a RequestFlush. */
        class RequestFlush implements IRequestFlush {

            /**
             * Constructs a new RequestFlush.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestFlush);

            /**
             * Encodes the specified RequestFlush message. Does not implicitly {@link tendermint.abci.RequestFlush.verify|verify} messages.
             * @param message RequestFlush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestFlush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestFlush message, length delimited. Does not implicitly {@link tendermint.abci.RequestFlush.verify|verify} messages.
             * @param message RequestFlush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestFlush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestFlush message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestFlush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestFlush;

            /**
             * Decodes a RequestFlush message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestFlush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestFlush;

            /**
             * Verifies a RequestFlush message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestFlush message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestFlush
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestFlush;

            /**
             * Creates a plain object from a RequestFlush message. Also converts values to other types if specified.
             * @param message RequestFlush
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestFlush, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestFlush to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestInfo. */
        interface IRequestInfo {

            /** RequestInfo version */
            version?: (string|null);

            /** RequestInfo block_version */
            block_version?: (Long|null);

            /** RequestInfo p2p_version */
            p2p_version?: (Long|null);
        }

        /** Represents a RequestInfo. */
        class RequestInfo implements IRequestInfo {

            /**
             * Constructs a new RequestInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestInfo);

            /** RequestInfo version. */
            public version: string;

            /** RequestInfo block_version. */
            public block_version: Long;

            /** RequestInfo p2p_version. */
            public p2p_version: Long;

            /**
             * Encodes the specified RequestInfo message. Does not implicitly {@link tendermint.abci.RequestInfo.verify|verify} messages.
             * @param message RequestInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestInfo message, length delimited. Does not implicitly {@link tendermint.abci.RequestInfo.verify|verify} messages.
             * @param message RequestInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestInfo;

            /**
             * Decodes a RequestInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestInfo;

            /**
             * Verifies a RequestInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestInfo
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestInfo;

            /**
             * Creates a plain object from a RequestInfo message. Also converts values to other types if specified.
             * @param message RequestInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestSetOption. */
        interface IRequestSetOption {

            /** RequestSetOption key */
            key?: (string|null);

            /** RequestSetOption value */
            value?: (string|null);
        }

        /** Represents a RequestSetOption. */
        class RequestSetOption implements IRequestSetOption {

            /**
             * Constructs a new RequestSetOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestSetOption);

            /** RequestSetOption key. */
            public key: string;

            /** RequestSetOption value. */
            public value: string;

            /**
             * Encodes the specified RequestSetOption message. Does not implicitly {@link tendermint.abci.RequestSetOption.verify|verify} messages.
             * @param message RequestSetOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestSetOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestSetOption message, length delimited. Does not implicitly {@link tendermint.abci.RequestSetOption.verify|verify} messages.
             * @param message RequestSetOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestSetOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestSetOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestSetOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestSetOption;

            /**
             * Decodes a RequestSetOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestSetOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestSetOption;

            /**
             * Verifies a RequestSetOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestSetOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestSetOption
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestSetOption;

            /**
             * Creates a plain object from a RequestSetOption message. Also converts values to other types if specified.
             * @param message RequestSetOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestSetOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestSetOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestInitChain. */
        interface IRequestInitChain {

            /** RequestInitChain time */
            time?: (google.protobuf.ITimestamp|null);

            /** RequestInitChain chain_id */
            chain_id?: (string|null);

            /** RequestInitChain consensus_params */
            consensus_params?: (tendermint.abci.IConsensusParams|null);

            /** RequestInitChain validators */
            validators?: (tendermint.abci.IValidatorUpdate[]|null);

            /** RequestInitChain app_state_bytes */
            app_state_bytes?: (Uint8Array|null);

            /** RequestInitChain initial_height */
            initial_height?: (Long|null);
        }

        /** Represents a RequestInitChain. */
        class RequestInitChain implements IRequestInitChain {

            /**
             * Constructs a new RequestInitChain.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestInitChain);

            /** RequestInitChain time. */
            public time?: (google.protobuf.ITimestamp|null);

            /** RequestInitChain chain_id. */
            public chain_id: string;

            /** RequestInitChain consensus_params. */
            public consensus_params?: (tendermint.abci.IConsensusParams|null);

            /** RequestInitChain validators. */
            public validators: tendermint.abci.IValidatorUpdate[];

            /** RequestInitChain app_state_bytes. */
            public app_state_bytes: Uint8Array;

            /** RequestInitChain initial_height. */
            public initial_height: Long;

            /**
             * Encodes the specified RequestInitChain message. Does not implicitly {@link tendermint.abci.RequestInitChain.verify|verify} messages.
             * @param message RequestInitChain message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestInitChain, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestInitChain message, length delimited. Does not implicitly {@link tendermint.abci.RequestInitChain.verify|verify} messages.
             * @param message RequestInitChain message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestInitChain, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestInitChain message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestInitChain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestInitChain;

            /**
             * Decodes a RequestInitChain message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestInitChain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestInitChain;

            /**
             * Verifies a RequestInitChain message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestInitChain message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestInitChain
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestInitChain;

            /**
             * Creates a plain object from a RequestInitChain message. Also converts values to other types if specified.
             * @param message RequestInitChain
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestInitChain, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestInitChain to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestQuery. */
        interface IRequestQuery {

            /** RequestQuery data */
            data?: (Uint8Array|null);

            /** RequestQuery path */
            path?: (string|null);

            /** RequestQuery height */
            height?: (Long|null);

            /** RequestQuery prove */
            prove?: (boolean|null);
        }

        /** Represents a RequestQuery. */
        class RequestQuery implements IRequestQuery {

            /**
             * Constructs a new RequestQuery.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestQuery);

            /** RequestQuery data. */
            public data: Uint8Array;

            /** RequestQuery path. */
            public path: string;

            /** RequestQuery height. */
            public height: Long;

            /** RequestQuery prove. */
            public prove: boolean;

            /**
             * Encodes the specified RequestQuery message. Does not implicitly {@link tendermint.abci.RequestQuery.verify|verify} messages.
             * @param message RequestQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestQuery message, length delimited. Does not implicitly {@link tendermint.abci.RequestQuery.verify|verify} messages.
             * @param message RequestQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestQuery message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestQuery;

            /**
             * Decodes a RequestQuery message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestQuery;

            /**
             * Verifies a RequestQuery message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestQuery message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestQuery
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestQuery;

            /**
             * Creates a plain object from a RequestQuery message. Also converts values to other types if specified.
             * @param message RequestQuery
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestQuery to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestBeginBlock. */
        interface IRequestBeginBlock {

            /** RequestBeginBlock hash */
            hash?: (Uint8Array|null);

            /** RequestBeginBlock header */
            header?: (tendermint.types.IHeader|null);

            /** RequestBeginBlock last_commit_info */
            last_commit_info?: (tendermint.abci.ILastCommitInfo|null);

            /** RequestBeginBlock byzantine_validators */
            byzantine_validators?: (tendermint.abci.IEvidence[]|null);
        }

        /** Represents a RequestBeginBlock. */
        class RequestBeginBlock implements IRequestBeginBlock {

            /**
             * Constructs a new RequestBeginBlock.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestBeginBlock);

            /** RequestBeginBlock hash. */
            public hash: Uint8Array;

            /** RequestBeginBlock header. */
            public header?: (tendermint.types.IHeader|null);

            /** RequestBeginBlock last_commit_info. */
            public last_commit_info?: (tendermint.abci.ILastCommitInfo|null);

            /** RequestBeginBlock byzantine_validators. */
            public byzantine_validators: tendermint.abci.IEvidence[];

            /**
             * Encodes the specified RequestBeginBlock message. Does not implicitly {@link tendermint.abci.RequestBeginBlock.verify|verify} messages.
             * @param message RequestBeginBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestBeginBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestBeginBlock message, length delimited. Does not implicitly {@link tendermint.abci.RequestBeginBlock.verify|verify} messages.
             * @param message RequestBeginBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestBeginBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestBeginBlock message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestBeginBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestBeginBlock;

            /**
             * Decodes a RequestBeginBlock message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestBeginBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestBeginBlock;

            /**
             * Verifies a RequestBeginBlock message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestBeginBlock message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestBeginBlock
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestBeginBlock;

            /**
             * Creates a plain object from a RequestBeginBlock message. Also converts values to other types if specified.
             * @param message RequestBeginBlock
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestBeginBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestBeginBlock to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** CheckTxType enum. */
        enum CheckTxType {
            NEW = 0,
            RECHECK = 1
        }

        /** Properties of a RequestCheckTx. */
        interface IRequestCheckTx {

            /** RequestCheckTx tx */
            tx?: (Uint8Array|null);

            /** RequestCheckTx type */
            type?: (tendermint.abci.CheckTxType|null);
        }

        /** Represents a RequestCheckTx. */
        class RequestCheckTx implements IRequestCheckTx {

            /**
             * Constructs a new RequestCheckTx.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestCheckTx);

            /** RequestCheckTx tx. */
            public tx: Uint8Array;

            /** RequestCheckTx type. */
            public type: tendermint.abci.CheckTxType;

            /**
             * Encodes the specified RequestCheckTx message. Does not implicitly {@link tendermint.abci.RequestCheckTx.verify|verify} messages.
             * @param message RequestCheckTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestCheckTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestCheckTx message, length delimited. Does not implicitly {@link tendermint.abci.RequestCheckTx.verify|verify} messages.
             * @param message RequestCheckTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestCheckTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestCheckTx message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestCheckTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestCheckTx;

            /**
             * Decodes a RequestCheckTx message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestCheckTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestCheckTx;

            /**
             * Verifies a RequestCheckTx message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestCheckTx message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestCheckTx
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestCheckTx;

            /**
             * Creates a plain object from a RequestCheckTx message. Also converts values to other types if specified.
             * @param message RequestCheckTx
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestCheckTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestCheckTx to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestDeliverTx. */
        interface IRequestDeliverTx {

            /** RequestDeliverTx tx */
            tx?: (Uint8Array|null);
        }

        /** Represents a RequestDeliverTx. */
        class RequestDeliverTx implements IRequestDeliverTx {

            /**
             * Constructs a new RequestDeliverTx.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestDeliverTx);

            /** RequestDeliverTx tx. */
            public tx: Uint8Array;

            /**
             * Encodes the specified RequestDeliverTx message. Does not implicitly {@link tendermint.abci.RequestDeliverTx.verify|verify} messages.
             * @param message RequestDeliverTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestDeliverTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestDeliverTx message, length delimited. Does not implicitly {@link tendermint.abci.RequestDeliverTx.verify|verify} messages.
             * @param message RequestDeliverTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestDeliverTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestDeliverTx message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestDeliverTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestDeliverTx;

            /**
             * Decodes a RequestDeliverTx message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestDeliverTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestDeliverTx;

            /**
             * Verifies a RequestDeliverTx message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestDeliverTx message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestDeliverTx
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestDeliverTx;

            /**
             * Creates a plain object from a RequestDeliverTx message. Also converts values to other types if specified.
             * @param message RequestDeliverTx
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestDeliverTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestDeliverTx to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestEndBlock. */
        interface IRequestEndBlock {

            /** RequestEndBlock height */
            height?: (Long|null);
        }

        /** Represents a RequestEndBlock. */
        class RequestEndBlock implements IRequestEndBlock {

            /**
             * Constructs a new RequestEndBlock.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestEndBlock);

            /** RequestEndBlock height. */
            public height: Long;

            /**
             * Encodes the specified RequestEndBlock message. Does not implicitly {@link tendermint.abci.RequestEndBlock.verify|verify} messages.
             * @param message RequestEndBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestEndBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestEndBlock message, length delimited. Does not implicitly {@link tendermint.abci.RequestEndBlock.verify|verify} messages.
             * @param message RequestEndBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestEndBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestEndBlock message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestEndBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestEndBlock;

            /**
             * Decodes a RequestEndBlock message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestEndBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestEndBlock;

            /**
             * Verifies a RequestEndBlock message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestEndBlock message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestEndBlock
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestEndBlock;

            /**
             * Creates a plain object from a RequestEndBlock message. Also converts values to other types if specified.
             * @param message RequestEndBlock
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestEndBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestEndBlock to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestCommit. */
        interface IRequestCommit {
        }

        /** Represents a RequestCommit. */
        class RequestCommit implements IRequestCommit {

            /**
             * Constructs a new RequestCommit.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestCommit);

            /**
             * Encodes the specified RequestCommit message. Does not implicitly {@link tendermint.abci.RequestCommit.verify|verify} messages.
             * @param message RequestCommit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestCommit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestCommit message, length delimited. Does not implicitly {@link tendermint.abci.RequestCommit.verify|verify} messages.
             * @param message RequestCommit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestCommit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestCommit message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestCommit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestCommit;

            /**
             * Decodes a RequestCommit message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestCommit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestCommit;

            /**
             * Verifies a RequestCommit message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestCommit message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestCommit
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestCommit;

            /**
             * Creates a plain object from a RequestCommit message. Also converts values to other types if specified.
             * @param message RequestCommit
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestCommit, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestCommit to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestListSnapshots. */
        interface IRequestListSnapshots {
        }

        /** Represents a RequestListSnapshots. */
        class RequestListSnapshots implements IRequestListSnapshots {

            /**
             * Constructs a new RequestListSnapshots.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestListSnapshots);

            /**
             * Encodes the specified RequestListSnapshots message. Does not implicitly {@link tendermint.abci.RequestListSnapshots.verify|verify} messages.
             * @param message RequestListSnapshots message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestListSnapshots, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestListSnapshots message, length delimited. Does not implicitly {@link tendermint.abci.RequestListSnapshots.verify|verify} messages.
             * @param message RequestListSnapshots message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestListSnapshots, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestListSnapshots message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestListSnapshots
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestListSnapshots;

            /**
             * Decodes a RequestListSnapshots message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestListSnapshots
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestListSnapshots;

            /**
             * Verifies a RequestListSnapshots message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestListSnapshots message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestListSnapshots
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestListSnapshots;

            /**
             * Creates a plain object from a RequestListSnapshots message. Also converts values to other types if specified.
             * @param message RequestListSnapshots
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestListSnapshots, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestListSnapshots to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestOfferSnapshot. */
        interface IRequestOfferSnapshot {

            /** RequestOfferSnapshot snapshot */
            snapshot?: (tendermint.abci.ISnapshot|null);

            /** RequestOfferSnapshot app_hash */
            app_hash?: (Uint8Array|null);
        }

        /** Represents a RequestOfferSnapshot. */
        class RequestOfferSnapshot implements IRequestOfferSnapshot {

            /**
             * Constructs a new RequestOfferSnapshot.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestOfferSnapshot);

            /** RequestOfferSnapshot snapshot. */
            public snapshot?: (tendermint.abci.ISnapshot|null);

            /** RequestOfferSnapshot app_hash. */
            public app_hash: Uint8Array;

            /**
             * Encodes the specified RequestOfferSnapshot message. Does not implicitly {@link tendermint.abci.RequestOfferSnapshot.verify|verify} messages.
             * @param message RequestOfferSnapshot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestOfferSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestOfferSnapshot message, length delimited. Does not implicitly {@link tendermint.abci.RequestOfferSnapshot.verify|verify} messages.
             * @param message RequestOfferSnapshot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestOfferSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestOfferSnapshot message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestOfferSnapshot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestOfferSnapshot;

            /**
             * Decodes a RequestOfferSnapshot message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestOfferSnapshot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestOfferSnapshot;

            /**
             * Verifies a RequestOfferSnapshot message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestOfferSnapshot message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestOfferSnapshot
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestOfferSnapshot;

            /**
             * Creates a plain object from a RequestOfferSnapshot message. Also converts values to other types if specified.
             * @param message RequestOfferSnapshot
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestOfferSnapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestOfferSnapshot to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestLoadSnapshotChunk. */
        interface IRequestLoadSnapshotChunk {

            /** RequestLoadSnapshotChunk height */
            height?: (Long|null);

            /** RequestLoadSnapshotChunk format */
            format?: (number|null);

            /** RequestLoadSnapshotChunk chunk */
            chunk?: (number|null);
        }

        /** Represents a RequestLoadSnapshotChunk. */
        class RequestLoadSnapshotChunk implements IRequestLoadSnapshotChunk {

            /**
             * Constructs a new RequestLoadSnapshotChunk.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestLoadSnapshotChunk);

            /** RequestLoadSnapshotChunk height. */
            public height: Long;

            /** RequestLoadSnapshotChunk format. */
            public format: number;

            /** RequestLoadSnapshotChunk chunk. */
            public chunk: number;

            /**
             * Encodes the specified RequestLoadSnapshotChunk message. Does not implicitly {@link tendermint.abci.RequestLoadSnapshotChunk.verify|verify} messages.
             * @param message RequestLoadSnapshotChunk message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestLoadSnapshotChunk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestLoadSnapshotChunk message, length delimited. Does not implicitly {@link tendermint.abci.RequestLoadSnapshotChunk.verify|verify} messages.
             * @param message RequestLoadSnapshotChunk message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestLoadSnapshotChunk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestLoadSnapshotChunk message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestLoadSnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestLoadSnapshotChunk;

            /**
             * Decodes a RequestLoadSnapshotChunk message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestLoadSnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestLoadSnapshotChunk;

            /**
             * Verifies a RequestLoadSnapshotChunk message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestLoadSnapshotChunk message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestLoadSnapshotChunk
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestLoadSnapshotChunk;

            /**
             * Creates a plain object from a RequestLoadSnapshotChunk message. Also converts values to other types if specified.
             * @param message RequestLoadSnapshotChunk
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestLoadSnapshotChunk, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestLoadSnapshotChunk to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestApplySnapshotChunk. */
        interface IRequestApplySnapshotChunk {

            /** RequestApplySnapshotChunk index */
            index?: (number|null);

            /** RequestApplySnapshotChunk chunk */
            chunk?: (Uint8Array|null);

            /** RequestApplySnapshotChunk sender */
            sender?: (string|null);
        }

        /** Represents a RequestApplySnapshotChunk. */
        class RequestApplySnapshotChunk implements IRequestApplySnapshotChunk {

            /**
             * Constructs a new RequestApplySnapshotChunk.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IRequestApplySnapshotChunk);

            /** RequestApplySnapshotChunk index. */
            public index: number;

            /** RequestApplySnapshotChunk chunk. */
            public chunk: Uint8Array;

            /** RequestApplySnapshotChunk sender. */
            public sender: string;

            /**
             * Encodes the specified RequestApplySnapshotChunk message. Does not implicitly {@link tendermint.abci.RequestApplySnapshotChunk.verify|verify} messages.
             * @param message RequestApplySnapshotChunk message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IRequestApplySnapshotChunk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestApplySnapshotChunk message, length delimited. Does not implicitly {@link tendermint.abci.RequestApplySnapshotChunk.verify|verify} messages.
             * @param message RequestApplySnapshotChunk message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IRequestApplySnapshotChunk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestApplySnapshotChunk message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestApplySnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.RequestApplySnapshotChunk;

            /**
             * Decodes a RequestApplySnapshotChunk message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestApplySnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.RequestApplySnapshotChunk;

            /**
             * Verifies a RequestApplySnapshotChunk message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestApplySnapshotChunk message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestApplySnapshotChunk
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.RequestApplySnapshotChunk;

            /**
             * Creates a plain object from a RequestApplySnapshotChunk message. Also converts values to other types if specified.
             * @param message RequestApplySnapshotChunk
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.RequestApplySnapshotChunk, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestApplySnapshotChunk to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Response. */
        interface IResponse {

            /** Response exception */
            exception?: (tendermint.abci.IResponseException|null);

            /** Response echo */
            echo?: (tendermint.abci.IResponseEcho|null);

            /** Response flush */
            flush?: (tendermint.abci.IResponseFlush|null);

            /** Response info */
            info?: (tendermint.abci.IResponseInfo|null);

            /** Response set_option */
            set_option?: (tendermint.abci.IResponseSetOption|null);

            /** Response init_chain */
            init_chain?: (tendermint.abci.IResponseInitChain|null);

            /** Response query */
            query?: (tendermint.abci.IResponseQuery|null);

            /** Response begin_block */
            begin_block?: (tendermint.abci.IResponseBeginBlock|null);

            /** Response check_tx */
            check_tx?: (tendermint.abci.IResponseCheckTx|null);

            /** Response deliver_tx */
            deliver_tx?: (tendermint.abci.IResponseDeliverTx|null);

            /** Response end_block */
            end_block?: (tendermint.abci.IResponseEndBlock|null);

            /** Response commit */
            commit?: (tendermint.abci.IResponseCommit|null);

            /** Response list_snapshots */
            list_snapshots?: (tendermint.abci.IResponseListSnapshots|null);

            /** Response offer_snapshot */
            offer_snapshot?: (tendermint.abci.IResponseOfferSnapshot|null);

            /** Response load_snapshot_chunk */
            load_snapshot_chunk?: (tendermint.abci.IResponseLoadSnapshotChunk|null);

            /** Response apply_snapshot_chunk */
            apply_snapshot_chunk?: (tendermint.abci.IResponseApplySnapshotChunk|null);
        }

        /** Represents a Response. */
        class Response implements IResponse {

            /**
             * Constructs a new Response.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponse);

            /** Response exception. */
            public exception?: (tendermint.abci.IResponseException|null);

            /** Response echo. */
            public echo?: (tendermint.abci.IResponseEcho|null);

            /** Response flush. */
            public flush?: (tendermint.abci.IResponseFlush|null);

            /** Response info. */
            public info?: (tendermint.abci.IResponseInfo|null);

            /** Response set_option. */
            public set_option?: (tendermint.abci.IResponseSetOption|null);

            /** Response init_chain. */
            public init_chain?: (tendermint.abci.IResponseInitChain|null);

            /** Response query. */
            public query?: (tendermint.abci.IResponseQuery|null);

            /** Response begin_block. */
            public begin_block?: (tendermint.abci.IResponseBeginBlock|null);

            /** Response check_tx. */
            public check_tx?: (tendermint.abci.IResponseCheckTx|null);

            /** Response deliver_tx. */
            public deliver_tx?: (tendermint.abci.IResponseDeliverTx|null);

            /** Response end_block. */
            public end_block?: (tendermint.abci.IResponseEndBlock|null);

            /** Response commit. */
            public commit?: (tendermint.abci.IResponseCommit|null);

            /** Response list_snapshots. */
            public list_snapshots?: (tendermint.abci.IResponseListSnapshots|null);

            /** Response offer_snapshot. */
            public offer_snapshot?: (tendermint.abci.IResponseOfferSnapshot|null);

            /** Response load_snapshot_chunk. */
            public load_snapshot_chunk?: (tendermint.abci.IResponseLoadSnapshotChunk|null);

            /** Response apply_snapshot_chunk. */
            public apply_snapshot_chunk?: (tendermint.abci.IResponseApplySnapshotChunk|null);

            /** Response value. */
            public value?: ("exception"|"echo"|"flush"|"info"|"set_option"|"init_chain"|"query"|"begin_block"|"check_tx"|"deliver_tx"|"end_block"|"commit"|"list_snapshots"|"offer_snapshot"|"load_snapshot_chunk"|"apply_snapshot_chunk");

            /**
             * Encodes the specified Response message. Does not implicitly {@link tendermint.abci.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Response message, length delimited. Does not implicitly {@link tendermint.abci.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Response message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.Response;

            /**
             * Decodes a Response message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.Response;

            /**
             * Verifies a Response message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Response message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Response
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.Response;

            /**
             * Creates a plain object from a Response message. Also converts values to other types if specified.
             * @param message Response
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Response to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseException. */
        interface IResponseException {

            /** ResponseException error */
            error?: (string|null);
        }

        /** Represents a ResponseException. */
        class ResponseException implements IResponseException {

            /**
             * Constructs a new ResponseException.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseException);

            /** ResponseException error. */
            public error: string;

            /**
             * Encodes the specified ResponseException message. Does not implicitly {@link tendermint.abci.ResponseException.verify|verify} messages.
             * @param message ResponseException message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseException, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseException message, length delimited. Does not implicitly {@link tendermint.abci.ResponseException.verify|verify} messages.
             * @param message ResponseException message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseException, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseException message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseException
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseException;

            /**
             * Decodes a ResponseException message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseException
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseException;

            /**
             * Verifies a ResponseException message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseException message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseException
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseException;

            /**
             * Creates a plain object from a ResponseException message. Also converts values to other types if specified.
             * @param message ResponseException
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseException, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseException to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseEcho. */
        interface IResponseEcho {

            /** ResponseEcho message */
            message?: (string|null);
        }

        /** Represents a ResponseEcho. */
        class ResponseEcho implements IResponseEcho {

            /**
             * Constructs a new ResponseEcho.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseEcho);

            /** ResponseEcho message. */
            public message: string;

            /**
             * Encodes the specified ResponseEcho message. Does not implicitly {@link tendermint.abci.ResponseEcho.verify|verify} messages.
             * @param message ResponseEcho message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseEcho, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseEcho message, length delimited. Does not implicitly {@link tendermint.abci.ResponseEcho.verify|verify} messages.
             * @param message ResponseEcho message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseEcho, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseEcho message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseEcho
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseEcho;

            /**
             * Decodes a ResponseEcho message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseEcho
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseEcho;

            /**
             * Verifies a ResponseEcho message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseEcho message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseEcho
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseEcho;

            /**
             * Creates a plain object from a ResponseEcho message. Also converts values to other types if specified.
             * @param message ResponseEcho
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseEcho, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseEcho to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseFlush. */
        interface IResponseFlush {
        }

        /** Represents a ResponseFlush. */
        class ResponseFlush implements IResponseFlush {

            /**
             * Constructs a new ResponseFlush.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseFlush);

            /**
             * Encodes the specified ResponseFlush message. Does not implicitly {@link tendermint.abci.ResponseFlush.verify|verify} messages.
             * @param message ResponseFlush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseFlush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseFlush message, length delimited. Does not implicitly {@link tendermint.abci.ResponseFlush.verify|verify} messages.
             * @param message ResponseFlush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseFlush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseFlush message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseFlush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseFlush;

            /**
             * Decodes a ResponseFlush message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseFlush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseFlush;

            /**
             * Verifies a ResponseFlush message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseFlush message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseFlush
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseFlush;

            /**
             * Creates a plain object from a ResponseFlush message. Also converts values to other types if specified.
             * @param message ResponseFlush
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseFlush, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseFlush to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseInfo. */
        interface IResponseInfo {

            /** ResponseInfo data */
            data?: (string|null);

            /** ResponseInfo version */
            version?: (string|null);

            /** ResponseInfo app_version */
            app_version?: (Long|null);

            /** ResponseInfo last_block_height */
            last_block_height?: (Long|null);

            /** ResponseInfo last_block_app_hash */
            last_block_app_hash?: (Uint8Array|null);
        }

        /** Represents a ResponseInfo. */
        class ResponseInfo implements IResponseInfo {

            /**
             * Constructs a new ResponseInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseInfo);

            /** ResponseInfo data. */
            public data: string;

            /** ResponseInfo version. */
            public version: string;

            /** ResponseInfo app_version. */
            public app_version: Long;

            /** ResponseInfo last_block_height. */
            public last_block_height: Long;

            /** ResponseInfo last_block_app_hash. */
            public last_block_app_hash: Uint8Array;

            /**
             * Encodes the specified ResponseInfo message. Does not implicitly {@link tendermint.abci.ResponseInfo.verify|verify} messages.
             * @param message ResponseInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseInfo message, length delimited. Does not implicitly {@link tendermint.abci.ResponseInfo.verify|verify} messages.
             * @param message ResponseInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseInfo;

            /**
             * Decodes a ResponseInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseInfo;

            /**
             * Verifies a ResponseInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseInfo
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseInfo;

            /**
             * Creates a plain object from a ResponseInfo message. Also converts values to other types if specified.
             * @param message ResponseInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseSetOption. */
        interface IResponseSetOption {

            /** ResponseSetOption code */
            code?: (number|null);

            /** ResponseSetOption log */
            log?: (string|null);

            /** ResponseSetOption info */
            info?: (string|null);
        }

        /** Represents a ResponseSetOption. */
        class ResponseSetOption implements IResponseSetOption {

            /**
             * Constructs a new ResponseSetOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseSetOption);

            /** ResponseSetOption code. */
            public code: number;

            /** ResponseSetOption log. */
            public log: string;

            /** ResponseSetOption info. */
            public info: string;

            /**
             * Encodes the specified ResponseSetOption message. Does not implicitly {@link tendermint.abci.ResponseSetOption.verify|verify} messages.
             * @param message ResponseSetOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseSetOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseSetOption message, length delimited. Does not implicitly {@link tendermint.abci.ResponseSetOption.verify|verify} messages.
             * @param message ResponseSetOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseSetOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseSetOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseSetOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseSetOption;

            /**
             * Decodes a ResponseSetOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseSetOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseSetOption;

            /**
             * Verifies a ResponseSetOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseSetOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseSetOption
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseSetOption;

            /**
             * Creates a plain object from a ResponseSetOption message. Also converts values to other types if specified.
             * @param message ResponseSetOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseSetOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseSetOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseInitChain. */
        interface IResponseInitChain {

            /** ResponseInitChain consensus_params */
            consensus_params?: (tendermint.abci.IConsensusParams|null);

            /** ResponseInitChain validators */
            validators?: (tendermint.abci.IValidatorUpdate[]|null);

            /** ResponseInitChain app_hash */
            app_hash?: (Uint8Array|null);
        }

        /** Represents a ResponseInitChain. */
        class ResponseInitChain implements IResponseInitChain {

            /**
             * Constructs a new ResponseInitChain.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseInitChain);

            /** ResponseInitChain consensus_params. */
            public consensus_params?: (tendermint.abci.IConsensusParams|null);

            /** ResponseInitChain validators. */
            public validators: tendermint.abci.IValidatorUpdate[];

            /** ResponseInitChain app_hash. */
            public app_hash: Uint8Array;

            /**
             * Encodes the specified ResponseInitChain message. Does not implicitly {@link tendermint.abci.ResponseInitChain.verify|verify} messages.
             * @param message ResponseInitChain message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseInitChain, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseInitChain message, length delimited. Does not implicitly {@link tendermint.abci.ResponseInitChain.verify|verify} messages.
             * @param message ResponseInitChain message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseInitChain, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseInitChain message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseInitChain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseInitChain;

            /**
             * Decodes a ResponseInitChain message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseInitChain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseInitChain;

            /**
             * Verifies a ResponseInitChain message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseInitChain message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseInitChain
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseInitChain;

            /**
             * Creates a plain object from a ResponseInitChain message. Also converts values to other types if specified.
             * @param message ResponseInitChain
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseInitChain, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseInitChain to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseQuery. */
        interface IResponseQuery {

            /** ResponseQuery code */
            code?: (number|null);

            /** ResponseQuery log */
            log?: (string|null);

            /** ResponseQuery info */
            info?: (string|null);

            /** ResponseQuery index */
            index?: (Long|null);

            /** ResponseQuery key */
            key?: (Uint8Array|null);

            /** ResponseQuery value */
            value?: (Uint8Array|null);

            /** ResponseQuery proof_ops */
            proof_ops?: (tendermint.crypto.IProofOps|null);

            /** ResponseQuery height */
            height?: (Long|null);

            /** ResponseQuery codespace */
            codespace?: (string|null);
        }

        /** Represents a ResponseQuery. */
        class ResponseQuery implements IResponseQuery {

            /**
             * Constructs a new ResponseQuery.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseQuery);

            /** ResponseQuery code. */
            public code: number;

            /** ResponseQuery log. */
            public log: string;

            /** ResponseQuery info. */
            public info: string;

            /** ResponseQuery index. */
            public index: Long;

            /** ResponseQuery key. */
            public key: Uint8Array;

            /** ResponseQuery value. */
            public value: Uint8Array;

            /** ResponseQuery proof_ops. */
            public proof_ops?: (tendermint.crypto.IProofOps|null);

            /** ResponseQuery height. */
            public height: Long;

            /** ResponseQuery codespace. */
            public codespace: string;

            /**
             * Encodes the specified ResponseQuery message. Does not implicitly {@link tendermint.abci.ResponseQuery.verify|verify} messages.
             * @param message ResponseQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseQuery message, length delimited. Does not implicitly {@link tendermint.abci.ResponseQuery.verify|verify} messages.
             * @param message ResponseQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseQuery message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseQuery;

            /**
             * Decodes a ResponseQuery message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseQuery;

            /**
             * Verifies a ResponseQuery message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseQuery message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseQuery
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseQuery;

            /**
             * Creates a plain object from a ResponseQuery message. Also converts values to other types if specified.
             * @param message ResponseQuery
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseQuery to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseBeginBlock. */
        interface IResponseBeginBlock {

            /** ResponseBeginBlock events */
            events?: (tendermint.abci.IEvent[]|null);
        }

        /** Represents a ResponseBeginBlock. */
        class ResponseBeginBlock implements IResponseBeginBlock {

            /**
             * Constructs a new ResponseBeginBlock.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseBeginBlock);

            /** ResponseBeginBlock events. */
            public events: tendermint.abci.IEvent[];

            /**
             * Encodes the specified ResponseBeginBlock message. Does not implicitly {@link tendermint.abci.ResponseBeginBlock.verify|verify} messages.
             * @param message ResponseBeginBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseBeginBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseBeginBlock message, length delimited. Does not implicitly {@link tendermint.abci.ResponseBeginBlock.verify|verify} messages.
             * @param message ResponseBeginBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseBeginBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseBeginBlock message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseBeginBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseBeginBlock;

            /**
             * Decodes a ResponseBeginBlock message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseBeginBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseBeginBlock;

            /**
             * Verifies a ResponseBeginBlock message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseBeginBlock message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseBeginBlock
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseBeginBlock;

            /**
             * Creates a plain object from a ResponseBeginBlock message. Also converts values to other types if specified.
             * @param message ResponseBeginBlock
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseBeginBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseBeginBlock to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseCheckTx. */
        interface IResponseCheckTx {

            /** ResponseCheckTx code */
            code?: (number|null);

            /** ResponseCheckTx data */
            data?: (Uint8Array|null);

            /** ResponseCheckTx log */
            log?: (string|null);

            /** ResponseCheckTx info */
            info?: (string|null);

            /** ResponseCheckTx gas_wanted */
            gas_wanted?: (Long|null);

            /** ResponseCheckTx gas_used */
            gas_used?: (Long|null);

            /** ResponseCheckTx events */
            events?: (tendermint.abci.IEvent[]|null);

            /** ResponseCheckTx codespace */
            codespace?: (string|null);
        }

        /** Represents a ResponseCheckTx. */
        class ResponseCheckTx implements IResponseCheckTx {

            /**
             * Constructs a new ResponseCheckTx.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseCheckTx);

            /** ResponseCheckTx code. */
            public code: number;

            /** ResponseCheckTx data. */
            public data: Uint8Array;

            /** ResponseCheckTx log. */
            public log: string;

            /** ResponseCheckTx info. */
            public info: string;

            /** ResponseCheckTx gas_wanted. */
            public gas_wanted: Long;

            /** ResponseCheckTx gas_used. */
            public gas_used: Long;

            /** ResponseCheckTx events. */
            public events: tendermint.abci.IEvent[];

            /** ResponseCheckTx codespace. */
            public codespace: string;

            /**
             * Encodes the specified ResponseCheckTx message. Does not implicitly {@link tendermint.abci.ResponseCheckTx.verify|verify} messages.
             * @param message ResponseCheckTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseCheckTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseCheckTx message, length delimited. Does not implicitly {@link tendermint.abci.ResponseCheckTx.verify|verify} messages.
             * @param message ResponseCheckTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseCheckTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseCheckTx message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseCheckTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseCheckTx;

            /**
             * Decodes a ResponseCheckTx message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseCheckTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseCheckTx;

            /**
             * Verifies a ResponseCheckTx message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseCheckTx message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseCheckTx
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseCheckTx;

            /**
             * Creates a plain object from a ResponseCheckTx message. Also converts values to other types if specified.
             * @param message ResponseCheckTx
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseCheckTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseCheckTx to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseDeliverTx. */
        interface IResponseDeliverTx {

            /** ResponseDeliverTx code */
            code?: (number|null);

            /** ResponseDeliverTx data */
            data?: (Uint8Array|null);

            /** ResponseDeliverTx log */
            log?: (string|null);

            /** ResponseDeliverTx info */
            info?: (string|null);

            /** ResponseDeliverTx gas_wanted */
            gas_wanted?: (Long|null);

            /** ResponseDeliverTx gas_used */
            gas_used?: (Long|null);

            /** ResponseDeliverTx events */
            events?: (tendermint.abci.IEvent[]|null);

            /** ResponseDeliverTx codespace */
            codespace?: (string|null);
        }

        /** Represents a ResponseDeliverTx. */
        class ResponseDeliverTx implements IResponseDeliverTx {

            /**
             * Constructs a new ResponseDeliverTx.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseDeliverTx);

            /** ResponseDeliverTx code. */
            public code: number;

            /** ResponseDeliverTx data. */
            public data: Uint8Array;

            /** ResponseDeliverTx log. */
            public log: string;

            /** ResponseDeliverTx info. */
            public info: string;

            /** ResponseDeliverTx gas_wanted. */
            public gas_wanted: Long;

            /** ResponseDeliverTx gas_used. */
            public gas_used: Long;

            /** ResponseDeliverTx events. */
            public events: tendermint.abci.IEvent[];

            /** ResponseDeliverTx codespace. */
            public codespace: string;

            /**
             * Encodes the specified ResponseDeliverTx message. Does not implicitly {@link tendermint.abci.ResponseDeliverTx.verify|verify} messages.
             * @param message ResponseDeliverTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseDeliverTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseDeliverTx message, length delimited. Does not implicitly {@link tendermint.abci.ResponseDeliverTx.verify|verify} messages.
             * @param message ResponseDeliverTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseDeliverTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseDeliverTx message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseDeliverTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseDeliverTx;

            /**
             * Decodes a ResponseDeliverTx message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseDeliverTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseDeliverTx;

            /**
             * Verifies a ResponseDeliverTx message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseDeliverTx message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseDeliverTx
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseDeliverTx;

            /**
             * Creates a plain object from a ResponseDeliverTx message. Also converts values to other types if specified.
             * @param message ResponseDeliverTx
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseDeliverTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseDeliverTx to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseEndBlock. */
        interface IResponseEndBlock {

            /** ResponseEndBlock validator_updates */
            validator_updates?: (tendermint.abci.IValidatorUpdate[]|null);

            /** ResponseEndBlock consensus_param_updates */
            consensus_param_updates?: (tendermint.abci.IConsensusParams|null);

            /** ResponseEndBlock events */
            events?: (tendermint.abci.IEvent[]|null);
        }

        /** Represents a ResponseEndBlock. */
        class ResponseEndBlock implements IResponseEndBlock {

            /**
             * Constructs a new ResponseEndBlock.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseEndBlock);

            /** ResponseEndBlock validator_updates. */
            public validator_updates: tendermint.abci.IValidatorUpdate[];

            /** ResponseEndBlock consensus_param_updates. */
            public consensus_param_updates?: (tendermint.abci.IConsensusParams|null);

            /** ResponseEndBlock events. */
            public events: tendermint.abci.IEvent[];

            /**
             * Encodes the specified ResponseEndBlock message. Does not implicitly {@link tendermint.abci.ResponseEndBlock.verify|verify} messages.
             * @param message ResponseEndBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseEndBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseEndBlock message, length delimited. Does not implicitly {@link tendermint.abci.ResponseEndBlock.verify|verify} messages.
             * @param message ResponseEndBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseEndBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseEndBlock message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseEndBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseEndBlock;

            /**
             * Decodes a ResponseEndBlock message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseEndBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseEndBlock;

            /**
             * Verifies a ResponseEndBlock message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseEndBlock message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseEndBlock
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseEndBlock;

            /**
             * Creates a plain object from a ResponseEndBlock message. Also converts values to other types if specified.
             * @param message ResponseEndBlock
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseEndBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseEndBlock to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseCommit. */
        interface IResponseCommit {

            /** ResponseCommit data */
            data?: (Uint8Array|null);

            /** ResponseCommit retain_height */
            retain_height?: (Long|null);
        }

        /** Represents a ResponseCommit. */
        class ResponseCommit implements IResponseCommit {

            /**
             * Constructs a new ResponseCommit.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseCommit);

            /** ResponseCommit data. */
            public data: Uint8Array;

            /** ResponseCommit retain_height. */
            public retain_height: Long;

            /**
             * Encodes the specified ResponseCommit message. Does not implicitly {@link tendermint.abci.ResponseCommit.verify|verify} messages.
             * @param message ResponseCommit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseCommit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseCommit message, length delimited. Does not implicitly {@link tendermint.abci.ResponseCommit.verify|verify} messages.
             * @param message ResponseCommit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseCommit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseCommit message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseCommit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseCommit;

            /**
             * Decodes a ResponseCommit message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseCommit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseCommit;

            /**
             * Verifies a ResponseCommit message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseCommit message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseCommit
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseCommit;

            /**
             * Creates a plain object from a ResponseCommit message. Also converts values to other types if specified.
             * @param message ResponseCommit
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseCommit, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseCommit to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseListSnapshots. */
        interface IResponseListSnapshots {

            /** ResponseListSnapshots snapshots */
            snapshots?: (tendermint.abci.ISnapshot[]|null);
        }

        /** Represents a ResponseListSnapshots. */
        class ResponseListSnapshots implements IResponseListSnapshots {

            /**
             * Constructs a new ResponseListSnapshots.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseListSnapshots);

            /** ResponseListSnapshots snapshots. */
            public snapshots: tendermint.abci.ISnapshot[];

            /**
             * Encodes the specified ResponseListSnapshots message. Does not implicitly {@link tendermint.abci.ResponseListSnapshots.verify|verify} messages.
             * @param message ResponseListSnapshots message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseListSnapshots, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseListSnapshots message, length delimited. Does not implicitly {@link tendermint.abci.ResponseListSnapshots.verify|verify} messages.
             * @param message ResponseListSnapshots message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseListSnapshots, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseListSnapshots message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseListSnapshots
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseListSnapshots;

            /**
             * Decodes a ResponseListSnapshots message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseListSnapshots
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseListSnapshots;

            /**
             * Verifies a ResponseListSnapshots message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseListSnapshots message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseListSnapshots
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseListSnapshots;

            /**
             * Creates a plain object from a ResponseListSnapshots message. Also converts values to other types if specified.
             * @param message ResponseListSnapshots
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseListSnapshots, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseListSnapshots to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseOfferSnapshot. */
        interface IResponseOfferSnapshot {

            /** ResponseOfferSnapshot result */
            result?: (tendermint.abci.ResponseOfferSnapshot.Result|null);
        }

        /** Represents a ResponseOfferSnapshot. */
        class ResponseOfferSnapshot implements IResponseOfferSnapshot {

            /**
             * Constructs a new ResponseOfferSnapshot.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseOfferSnapshot);

            /** ResponseOfferSnapshot result. */
            public result: tendermint.abci.ResponseOfferSnapshot.Result;

            /**
             * Encodes the specified ResponseOfferSnapshot message. Does not implicitly {@link tendermint.abci.ResponseOfferSnapshot.verify|verify} messages.
             * @param message ResponseOfferSnapshot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseOfferSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseOfferSnapshot message, length delimited. Does not implicitly {@link tendermint.abci.ResponseOfferSnapshot.verify|verify} messages.
             * @param message ResponseOfferSnapshot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseOfferSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseOfferSnapshot message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseOfferSnapshot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseOfferSnapshot;

            /**
             * Decodes a ResponseOfferSnapshot message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseOfferSnapshot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseOfferSnapshot;

            /**
             * Verifies a ResponseOfferSnapshot message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseOfferSnapshot message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseOfferSnapshot
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseOfferSnapshot;

            /**
             * Creates a plain object from a ResponseOfferSnapshot message. Also converts values to other types if specified.
             * @param message ResponseOfferSnapshot
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseOfferSnapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseOfferSnapshot to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ResponseOfferSnapshot {

            /** Result enum. */
            enum Result {
                UNKNOWN = 0,
                ACCEPT = 1,
                ABORT = 2,
                REJECT = 3,
                REJECT_FORMAT = 4,
                REJECT_SENDER = 5
            }
        }

        /** Properties of a ResponseLoadSnapshotChunk. */
        interface IResponseLoadSnapshotChunk {

            /** ResponseLoadSnapshotChunk chunk */
            chunk?: (Uint8Array|null);
        }

        /** Represents a ResponseLoadSnapshotChunk. */
        class ResponseLoadSnapshotChunk implements IResponseLoadSnapshotChunk {

            /**
             * Constructs a new ResponseLoadSnapshotChunk.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseLoadSnapshotChunk);

            /** ResponseLoadSnapshotChunk chunk. */
            public chunk: Uint8Array;

            /**
             * Encodes the specified ResponseLoadSnapshotChunk message. Does not implicitly {@link tendermint.abci.ResponseLoadSnapshotChunk.verify|verify} messages.
             * @param message ResponseLoadSnapshotChunk message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseLoadSnapshotChunk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseLoadSnapshotChunk message, length delimited. Does not implicitly {@link tendermint.abci.ResponseLoadSnapshotChunk.verify|verify} messages.
             * @param message ResponseLoadSnapshotChunk message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseLoadSnapshotChunk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseLoadSnapshotChunk message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseLoadSnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseLoadSnapshotChunk;

            /**
             * Decodes a ResponseLoadSnapshotChunk message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseLoadSnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseLoadSnapshotChunk;

            /**
             * Verifies a ResponseLoadSnapshotChunk message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseLoadSnapshotChunk message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseLoadSnapshotChunk
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseLoadSnapshotChunk;

            /**
             * Creates a plain object from a ResponseLoadSnapshotChunk message. Also converts values to other types if specified.
             * @param message ResponseLoadSnapshotChunk
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseLoadSnapshotChunk, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseLoadSnapshotChunk to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseApplySnapshotChunk. */
        interface IResponseApplySnapshotChunk {

            /** ResponseApplySnapshotChunk result */
            result?: (tendermint.abci.ResponseApplySnapshotChunk.Result|null);

            /** ResponseApplySnapshotChunk refetch_chunks */
            refetch_chunks?: (number[]|null);

            /** ResponseApplySnapshotChunk reject_senders */
            reject_senders?: (string[]|null);
        }

        /** Represents a ResponseApplySnapshotChunk. */
        class ResponseApplySnapshotChunk implements IResponseApplySnapshotChunk {

            /**
             * Constructs a new ResponseApplySnapshotChunk.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IResponseApplySnapshotChunk);

            /** ResponseApplySnapshotChunk result. */
            public result: tendermint.abci.ResponseApplySnapshotChunk.Result;

            /** ResponseApplySnapshotChunk refetch_chunks. */
            public refetch_chunks: number[];

            /** ResponseApplySnapshotChunk reject_senders. */
            public reject_senders: string[];

            /**
             * Encodes the specified ResponseApplySnapshotChunk message. Does not implicitly {@link tendermint.abci.ResponseApplySnapshotChunk.verify|verify} messages.
             * @param message ResponseApplySnapshotChunk message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IResponseApplySnapshotChunk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseApplySnapshotChunk message, length delimited. Does not implicitly {@link tendermint.abci.ResponseApplySnapshotChunk.verify|verify} messages.
             * @param message ResponseApplySnapshotChunk message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IResponseApplySnapshotChunk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseApplySnapshotChunk message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseApplySnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ResponseApplySnapshotChunk;

            /**
             * Decodes a ResponseApplySnapshotChunk message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseApplySnapshotChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ResponseApplySnapshotChunk;

            /**
             * Verifies a ResponseApplySnapshotChunk message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseApplySnapshotChunk message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseApplySnapshotChunk
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ResponseApplySnapshotChunk;

            /**
             * Creates a plain object from a ResponseApplySnapshotChunk message. Also converts values to other types if specified.
             * @param message ResponseApplySnapshotChunk
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ResponseApplySnapshotChunk, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseApplySnapshotChunk to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ResponseApplySnapshotChunk {

            /** Result enum. */
            enum Result {
                UNKNOWN = 0,
                ACCEPT = 1,
                ABORT = 2,
                RETRY = 3,
                RETRY_SNAPSHOT = 4,
                REJECT_SNAPSHOT = 5
            }
        }

        /** Properties of a ConsensusParams. */
        interface IConsensusParams {

            /** ConsensusParams block */
            block?: (tendermint.abci.IBlockParams|null);

            /** ConsensusParams evidence */
            evidence?: (tendermint.types.IEvidenceParams|null);

            /** ConsensusParams validator */
            validator?: (tendermint.types.IValidatorParams|null);

            /** ConsensusParams version */
            version?: (tendermint.types.IVersionParams|null);
        }

        /** Represents a ConsensusParams. */
        class ConsensusParams implements IConsensusParams {

            /**
             * Constructs a new ConsensusParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IConsensusParams);

            /** ConsensusParams block. */
            public block?: (tendermint.abci.IBlockParams|null);

            /** ConsensusParams evidence. */
            public evidence?: (tendermint.types.IEvidenceParams|null);

            /** ConsensusParams validator. */
            public validator?: (tendermint.types.IValidatorParams|null);

            /** ConsensusParams version. */
            public version?: (tendermint.types.IVersionParams|null);

            /**
             * Encodes the specified ConsensusParams message. Does not implicitly {@link tendermint.abci.ConsensusParams.verify|verify} messages.
             * @param message ConsensusParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IConsensusParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ConsensusParams message, length delimited. Does not implicitly {@link tendermint.abci.ConsensusParams.verify|verify} messages.
             * @param message ConsensusParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IConsensusParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ConsensusParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ConsensusParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ConsensusParams;

            /**
             * Decodes a ConsensusParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ConsensusParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ConsensusParams;

            /**
             * Verifies a ConsensusParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ConsensusParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ConsensusParams
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ConsensusParams;

            /**
             * Creates a plain object from a ConsensusParams message. Also converts values to other types if specified.
             * @param message ConsensusParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ConsensusParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ConsensusParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BlockParams. */
        interface IBlockParams {

            /** BlockParams max_bytes */
            max_bytes?: (Long|null);

            /** BlockParams max_gas */
            max_gas?: (Long|null);
        }

        /** Represents a BlockParams. */
        class BlockParams implements IBlockParams {

            /**
             * Constructs a new BlockParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IBlockParams);

            /** BlockParams max_bytes. */
            public max_bytes: Long;

            /** BlockParams max_gas. */
            public max_gas: Long;

            /**
             * Encodes the specified BlockParams message. Does not implicitly {@link tendermint.abci.BlockParams.verify|verify} messages.
             * @param message BlockParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IBlockParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BlockParams message, length delimited. Does not implicitly {@link tendermint.abci.BlockParams.verify|verify} messages.
             * @param message BlockParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IBlockParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BlockParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BlockParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.BlockParams;

            /**
             * Decodes a BlockParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BlockParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.BlockParams;

            /**
             * Verifies a BlockParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BlockParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BlockParams
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.BlockParams;

            /**
             * Creates a plain object from a BlockParams message. Also converts values to other types if specified.
             * @param message BlockParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.BlockParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BlockParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LastCommitInfo. */
        interface ILastCommitInfo {

            /** LastCommitInfo round */
            round?: (number|null);

            /** LastCommitInfo votes */
            votes?: (tendermint.abci.IVoteInfo[]|null);
        }

        /** Represents a LastCommitInfo. */
        class LastCommitInfo implements ILastCommitInfo {

            /**
             * Constructs a new LastCommitInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.ILastCommitInfo);

            /** LastCommitInfo round. */
            public round: number;

            /** LastCommitInfo votes. */
            public votes: tendermint.abci.IVoteInfo[];

            /**
             * Encodes the specified LastCommitInfo message. Does not implicitly {@link tendermint.abci.LastCommitInfo.verify|verify} messages.
             * @param message LastCommitInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.ILastCommitInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LastCommitInfo message, length delimited. Does not implicitly {@link tendermint.abci.LastCommitInfo.verify|verify} messages.
             * @param message LastCommitInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.ILastCommitInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LastCommitInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LastCommitInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.LastCommitInfo;

            /**
             * Decodes a LastCommitInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LastCommitInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.LastCommitInfo;

            /**
             * Verifies a LastCommitInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LastCommitInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LastCommitInfo
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.LastCommitInfo;

            /**
             * Creates a plain object from a LastCommitInfo message. Also converts values to other types if specified.
             * @param message LastCommitInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.LastCommitInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LastCommitInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Event. */
        interface IEvent {

            /** Event type */
            type?: (string|null);

            /** Event attributes */
            attributes?: (tendermint.abci.IEventAttribute[]|null);
        }

        /** Represents an Event. */
        class Event implements IEvent {

            /**
             * Constructs a new Event.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IEvent);

            /** Event type. */
            public type: string;

            /** Event attributes. */
            public attributes: tendermint.abci.IEventAttribute[];

            /**
             * Encodes the specified Event message. Does not implicitly {@link tendermint.abci.Event.verify|verify} messages.
             * @param message Event message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Event message, length delimited. Does not implicitly {@link tendermint.abci.Event.verify|verify} messages.
             * @param message Event message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Event message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Event
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.Event;

            /**
             * Decodes an Event message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Event
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.Event;

            /**
             * Verifies an Event message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Event message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Event
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.Event;

            /**
             * Creates a plain object from an Event message. Also converts values to other types if specified.
             * @param message Event
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Event to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EventAttribute. */
        interface IEventAttribute {

            /** EventAttribute key */
            key?: (Uint8Array|null);

            /** EventAttribute value */
            value?: (Uint8Array|null);

            /** EventAttribute index */
            index?: (boolean|null);
        }

        /** Represents an EventAttribute. */
        class EventAttribute implements IEventAttribute {

            /**
             * Constructs a new EventAttribute.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IEventAttribute);

            /** EventAttribute key. */
            public key: Uint8Array;

            /** EventAttribute value. */
            public value: Uint8Array;

            /** EventAttribute index. */
            public index: boolean;

            /**
             * Encodes the specified EventAttribute message. Does not implicitly {@link tendermint.abci.EventAttribute.verify|verify} messages.
             * @param message EventAttribute message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IEventAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EventAttribute message, length delimited. Does not implicitly {@link tendermint.abci.EventAttribute.verify|verify} messages.
             * @param message EventAttribute message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IEventAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EventAttribute message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EventAttribute
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.EventAttribute;

            /**
             * Decodes an EventAttribute message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EventAttribute
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.EventAttribute;

            /**
             * Verifies an EventAttribute message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EventAttribute message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EventAttribute
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.EventAttribute;

            /**
             * Creates a plain object from an EventAttribute message. Also converts values to other types if specified.
             * @param message EventAttribute
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.EventAttribute, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EventAttribute to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TxResult. */
        interface ITxResult {

            /** TxResult height */
            height?: (Long|null);

            /** TxResult index */
            index?: (number|null);

            /** TxResult tx */
            tx?: (Uint8Array|null);

            /** TxResult result */
            result?: (tendermint.abci.IResponseDeliverTx|null);
        }

        /** Represents a TxResult. */
        class TxResult implements ITxResult {

            /**
             * Constructs a new TxResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.ITxResult);

            /** TxResult height. */
            public height: Long;

            /** TxResult index. */
            public index: number;

            /** TxResult tx. */
            public tx: Uint8Array;

            /** TxResult result. */
            public result?: (tendermint.abci.IResponseDeliverTx|null);

            /**
             * Encodes the specified TxResult message. Does not implicitly {@link tendermint.abci.TxResult.verify|verify} messages.
             * @param message TxResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.ITxResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TxResult message, length delimited. Does not implicitly {@link tendermint.abci.TxResult.verify|verify} messages.
             * @param message TxResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.ITxResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TxResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TxResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.TxResult;

            /**
             * Decodes a TxResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TxResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.TxResult;

            /**
             * Verifies a TxResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TxResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TxResult
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.TxResult;

            /**
             * Creates a plain object from a TxResult message. Also converts values to other types if specified.
             * @param message TxResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.TxResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TxResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Validator. */
        interface IValidator {

            /** Validator address */
            address?: (Uint8Array|null);

            /** Validator power */
            power?: (Long|null);
        }

        /** Represents a Validator. */
        class Validator implements IValidator {

            /**
             * Constructs a new Validator.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IValidator);

            /** Validator address. */
            public address: Uint8Array;

            /** Validator power. */
            public power: Long;

            /**
             * Encodes the specified Validator message. Does not implicitly {@link tendermint.abci.Validator.verify|verify} messages.
             * @param message Validator message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IValidator, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Validator message, length delimited. Does not implicitly {@link tendermint.abci.Validator.verify|verify} messages.
             * @param message Validator message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IValidator, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Validator message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Validator
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.Validator;

            /**
             * Decodes a Validator message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Validator
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.Validator;

            /**
             * Verifies a Validator message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Validator message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Validator
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.Validator;

            /**
             * Creates a plain object from a Validator message. Also converts values to other types if specified.
             * @param message Validator
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.Validator, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Validator to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ValidatorUpdate. */
        interface IValidatorUpdate {

            /** ValidatorUpdate pub_key */
            pub_key?: (tendermint.crypto.IPublicKey|null);

            /** ValidatorUpdate power */
            power?: (Long|null);
        }

        /** Represents a ValidatorUpdate. */
        class ValidatorUpdate implements IValidatorUpdate {

            /**
             * Constructs a new ValidatorUpdate.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IValidatorUpdate);

            /** ValidatorUpdate pub_key. */
            public pub_key?: (tendermint.crypto.IPublicKey|null);

            /** ValidatorUpdate power. */
            public power: Long;

            /**
             * Encodes the specified ValidatorUpdate message. Does not implicitly {@link tendermint.abci.ValidatorUpdate.verify|verify} messages.
             * @param message ValidatorUpdate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IValidatorUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ValidatorUpdate message, length delimited. Does not implicitly {@link tendermint.abci.ValidatorUpdate.verify|verify} messages.
             * @param message ValidatorUpdate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IValidatorUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ValidatorUpdate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ValidatorUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.ValidatorUpdate;

            /**
             * Decodes a ValidatorUpdate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ValidatorUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.ValidatorUpdate;

            /**
             * Verifies a ValidatorUpdate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ValidatorUpdate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ValidatorUpdate
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.ValidatorUpdate;

            /**
             * Creates a plain object from a ValidatorUpdate message. Also converts values to other types if specified.
             * @param message ValidatorUpdate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.ValidatorUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ValidatorUpdate to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a VoteInfo. */
        interface IVoteInfo {

            /** VoteInfo validator */
            validator?: (tendermint.abci.IValidator|null);

            /** VoteInfo signed_last_block */
            signed_last_block?: (boolean|null);
        }

        /** Represents a VoteInfo. */
        class VoteInfo implements IVoteInfo {

            /**
             * Constructs a new VoteInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IVoteInfo);

            /** VoteInfo validator. */
            public validator?: (tendermint.abci.IValidator|null);

            /** VoteInfo signed_last_block. */
            public signed_last_block: boolean;

            /**
             * Encodes the specified VoteInfo message. Does not implicitly {@link tendermint.abci.VoteInfo.verify|verify} messages.
             * @param message VoteInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IVoteInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VoteInfo message, length delimited. Does not implicitly {@link tendermint.abci.VoteInfo.verify|verify} messages.
             * @param message VoteInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IVoteInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VoteInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VoteInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.VoteInfo;

            /**
             * Decodes a VoteInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VoteInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.VoteInfo;

            /**
             * Verifies a VoteInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VoteInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VoteInfo
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.VoteInfo;

            /**
             * Creates a plain object from a VoteInfo message. Also converts values to other types if specified.
             * @param message VoteInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.VoteInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VoteInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Evidence. */
        interface IEvidence {

            /** Evidence type */
            type?: (string|null);

            /** Evidence validator */
            validator?: (tendermint.abci.IValidator|null);

            /** Evidence height */
            height?: (Long|null);

            /** Evidence time */
            time?: (google.protobuf.ITimestamp|null);

            /** Evidence total_voting_power */
            total_voting_power?: (Long|null);
        }

        /** Represents an Evidence. */
        class Evidence implements IEvidence {

            /**
             * Constructs a new Evidence.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.IEvidence);

            /** Evidence type. */
            public type: string;

            /** Evidence validator. */
            public validator?: (tendermint.abci.IValidator|null);

            /** Evidence height. */
            public height: Long;

            /** Evidence time. */
            public time?: (google.protobuf.ITimestamp|null);

            /** Evidence total_voting_power. */
            public total_voting_power: Long;

            /**
             * Encodes the specified Evidence message. Does not implicitly {@link tendermint.abci.Evidence.verify|verify} messages.
             * @param message Evidence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.IEvidence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Evidence message, length delimited. Does not implicitly {@link tendermint.abci.Evidence.verify|verify} messages.
             * @param message Evidence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.IEvidence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Evidence message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Evidence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.Evidence;

            /**
             * Decodes an Evidence message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Evidence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.Evidence;

            /**
             * Verifies an Evidence message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Evidence message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Evidence
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.Evidence;

            /**
             * Creates a plain object from an Evidence message. Also converts values to other types if specified.
             * @param message Evidence
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.Evidence, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Evidence to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Snapshot. */
        interface ISnapshot {

            /** Snapshot height */
            height?: (Long|null);

            /** Snapshot format */
            format?: (number|null);

            /** Snapshot chunks */
            chunks?: (number|null);

            /** Snapshot hash */
            hash?: (Uint8Array|null);

            /** Snapshot metadata */
            metadata?: (Uint8Array|null);
        }

        /** Represents a Snapshot. */
        class Snapshot implements ISnapshot {

            /**
             * Constructs a new Snapshot.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.abci.ISnapshot);

            /** Snapshot height. */
            public height: Long;

            /** Snapshot format. */
            public format: number;

            /** Snapshot chunks. */
            public chunks: number;

            /** Snapshot hash. */
            public hash: Uint8Array;

            /** Snapshot metadata. */
            public metadata: Uint8Array;

            /**
             * Encodes the specified Snapshot message. Does not implicitly {@link tendermint.abci.Snapshot.verify|verify} messages.
             * @param message Snapshot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.abci.ISnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Snapshot message, length delimited. Does not implicitly {@link tendermint.abci.Snapshot.verify|verify} messages.
             * @param message Snapshot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.abci.ISnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Snapshot message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Snapshot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.abci.Snapshot;

            /**
             * Decodes a Snapshot message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Snapshot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.abci.Snapshot;

            /**
             * Verifies a Snapshot message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Snapshot message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Snapshot
             */
            public static fromObject(object: { [k: string]: any }): tendermint.abci.Snapshot;

            /**
             * Creates a plain object from a Snapshot message. Also converts values to other types if specified.
             * @param message Snapshot
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.abci.Snapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Snapshot to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a ABCIApplication */
        class ABCIApplication extends $protobuf.rpc.Service {

            /**
             * Constructs a new ABCIApplication service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Calls Echo.
             * @param request RequestEcho message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseEcho
             */
            public echo(request: tendermint.abci.IRequestEcho, callback: tendermint.abci.ABCIApplication.EchoCallback): void;

            /**
             * Calls Echo.
             * @param request RequestEcho message or plain object
             * @returns Promise
             */
            public echo(request: tendermint.abci.IRequestEcho): Promise<tendermint.abci.ResponseEcho>;

            /**
             * Calls Flush.
             * @param request RequestFlush message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseFlush
             */
            public flush(request: tendermint.abci.IRequestFlush, callback: tendermint.abci.ABCIApplication.FlushCallback): void;

            /**
             * Calls Flush.
             * @param request RequestFlush message or plain object
             * @returns Promise
             */
            public flush(request: tendermint.abci.IRequestFlush): Promise<tendermint.abci.ResponseFlush>;

            /**
             * Calls Info.
             * @param request RequestInfo message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseInfo
             */
            public info(request: tendermint.abci.IRequestInfo, callback: tendermint.abci.ABCIApplication.InfoCallback): void;

            /**
             * Calls Info.
             * @param request RequestInfo message or plain object
             * @returns Promise
             */
            public info(request: tendermint.abci.IRequestInfo): Promise<tendermint.abci.ResponseInfo>;

            /**
             * Calls SetOption.
             * @param request RequestSetOption message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseSetOption
             */
            public setOption(request: tendermint.abci.IRequestSetOption, callback: tendermint.abci.ABCIApplication.SetOptionCallback): void;

            /**
             * Calls SetOption.
             * @param request RequestSetOption message or plain object
             * @returns Promise
             */
            public setOption(request: tendermint.abci.IRequestSetOption): Promise<tendermint.abci.ResponseSetOption>;

            /**
             * Calls DeliverTx.
             * @param request RequestDeliverTx message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseDeliverTx
             */
            public deliverTx(request: tendermint.abci.IRequestDeliverTx, callback: tendermint.abci.ABCIApplication.DeliverTxCallback): void;

            /**
             * Calls DeliverTx.
             * @param request RequestDeliverTx message or plain object
             * @returns Promise
             */
            public deliverTx(request: tendermint.abci.IRequestDeliverTx): Promise<tendermint.abci.ResponseDeliverTx>;

            /**
             * Calls CheckTx.
             * @param request RequestCheckTx message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseCheckTx
             */
            public checkTx(request: tendermint.abci.IRequestCheckTx, callback: tendermint.abci.ABCIApplication.CheckTxCallback): void;

            /**
             * Calls CheckTx.
             * @param request RequestCheckTx message or plain object
             * @returns Promise
             */
            public checkTx(request: tendermint.abci.IRequestCheckTx): Promise<tendermint.abci.ResponseCheckTx>;

            /**
             * Calls Query.
             * @param request RequestQuery message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseQuery
             */
            public query(request: tendermint.abci.IRequestQuery, callback: tendermint.abci.ABCIApplication.QueryCallback): void;

            /**
             * Calls Query.
             * @param request RequestQuery message or plain object
             * @returns Promise
             */
            public query(request: tendermint.abci.IRequestQuery): Promise<tendermint.abci.ResponseQuery>;

            /**
             * Calls Commit.
             * @param request RequestCommit message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseCommit
             */
            public commit(request: tendermint.abci.IRequestCommit, callback: tendermint.abci.ABCIApplication.CommitCallback): void;

            /**
             * Calls Commit.
             * @param request RequestCommit message or plain object
             * @returns Promise
             */
            public commit(request: tendermint.abci.IRequestCommit): Promise<tendermint.abci.ResponseCommit>;

            /**
             * Calls InitChain.
             * @param request RequestInitChain message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseInitChain
             */
            public initChain(request: tendermint.abci.IRequestInitChain, callback: tendermint.abci.ABCIApplication.InitChainCallback): void;

            /**
             * Calls InitChain.
             * @param request RequestInitChain message or plain object
             * @returns Promise
             */
            public initChain(request: tendermint.abci.IRequestInitChain): Promise<tendermint.abci.ResponseInitChain>;

            /**
             * Calls BeginBlock.
             * @param request RequestBeginBlock message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseBeginBlock
             */
            public beginBlock(request: tendermint.abci.IRequestBeginBlock, callback: tendermint.abci.ABCIApplication.BeginBlockCallback): void;

            /**
             * Calls BeginBlock.
             * @param request RequestBeginBlock message or plain object
             * @returns Promise
             */
            public beginBlock(request: tendermint.abci.IRequestBeginBlock): Promise<tendermint.abci.ResponseBeginBlock>;

            /**
             * Calls EndBlock.
             * @param request RequestEndBlock message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseEndBlock
             */
            public endBlock(request: tendermint.abci.IRequestEndBlock, callback: tendermint.abci.ABCIApplication.EndBlockCallback): void;

            /**
             * Calls EndBlock.
             * @param request RequestEndBlock message or plain object
             * @returns Promise
             */
            public endBlock(request: tendermint.abci.IRequestEndBlock): Promise<tendermint.abci.ResponseEndBlock>;

            /**
             * Calls ListSnapshots.
             * @param request RequestListSnapshots message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseListSnapshots
             */
            public listSnapshots(request: tendermint.abci.IRequestListSnapshots, callback: tendermint.abci.ABCIApplication.ListSnapshotsCallback): void;

            /**
             * Calls ListSnapshots.
             * @param request RequestListSnapshots message or plain object
             * @returns Promise
             */
            public listSnapshots(request: tendermint.abci.IRequestListSnapshots): Promise<tendermint.abci.ResponseListSnapshots>;

            /**
             * Calls OfferSnapshot.
             * @param request RequestOfferSnapshot message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseOfferSnapshot
             */
            public offerSnapshot(request: tendermint.abci.IRequestOfferSnapshot, callback: tendermint.abci.ABCIApplication.OfferSnapshotCallback): void;

            /**
             * Calls OfferSnapshot.
             * @param request RequestOfferSnapshot message or plain object
             * @returns Promise
             */
            public offerSnapshot(request: tendermint.abci.IRequestOfferSnapshot): Promise<tendermint.abci.ResponseOfferSnapshot>;

            /**
             * Calls LoadSnapshotChunk.
             * @param request RequestLoadSnapshotChunk message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseLoadSnapshotChunk
             */
            public loadSnapshotChunk(request: tendermint.abci.IRequestLoadSnapshotChunk, callback: tendermint.abci.ABCIApplication.LoadSnapshotChunkCallback): void;

            /**
             * Calls LoadSnapshotChunk.
             * @param request RequestLoadSnapshotChunk message or plain object
             * @returns Promise
             */
            public loadSnapshotChunk(request: tendermint.abci.IRequestLoadSnapshotChunk): Promise<tendermint.abci.ResponseLoadSnapshotChunk>;

            /**
             * Calls ApplySnapshotChunk.
             * @param request RequestApplySnapshotChunk message or plain object
             * @param callback Node-style callback called with the error, if any, and ResponseApplySnapshotChunk
             */
            public applySnapshotChunk(request: tendermint.abci.IRequestApplySnapshotChunk, callback: tendermint.abci.ABCIApplication.ApplySnapshotChunkCallback): void;

            /**
             * Calls ApplySnapshotChunk.
             * @param request RequestApplySnapshotChunk message or plain object
             * @returns Promise
             */
            public applySnapshotChunk(request: tendermint.abci.IRequestApplySnapshotChunk): Promise<tendermint.abci.ResponseApplySnapshotChunk>;
        }

        namespace ABCIApplication {

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#echo}.
             * @param error Error, if any
             * @param [response] ResponseEcho
             */
            type EchoCallback = (error: (Error|null), response?: tendermint.abci.ResponseEcho) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#flush}.
             * @param error Error, if any
             * @param [response] ResponseFlush
             */
            type FlushCallback = (error: (Error|null), response?: tendermint.abci.ResponseFlush) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#info}.
             * @param error Error, if any
             * @param [response] ResponseInfo
             */
            type InfoCallback = (error: (Error|null), response?: tendermint.abci.ResponseInfo) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#setOption}.
             * @param error Error, if any
             * @param [response] ResponseSetOption
             */
            type SetOptionCallback = (error: (Error|null), response?: tendermint.abci.ResponseSetOption) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#deliverTx}.
             * @param error Error, if any
             * @param [response] ResponseDeliverTx
             */
            type DeliverTxCallback = (error: (Error|null), response?: tendermint.abci.ResponseDeliverTx) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#checkTx}.
             * @param error Error, if any
             * @param [response] ResponseCheckTx
             */
            type CheckTxCallback = (error: (Error|null), response?: tendermint.abci.ResponseCheckTx) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#query}.
             * @param error Error, if any
             * @param [response] ResponseQuery
             */
            type QueryCallback = (error: (Error|null), response?: tendermint.abci.ResponseQuery) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#commit}.
             * @param error Error, if any
             * @param [response] ResponseCommit
             */
            type CommitCallback = (error: (Error|null), response?: tendermint.abci.ResponseCommit) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#initChain}.
             * @param error Error, if any
             * @param [response] ResponseInitChain
             */
            type InitChainCallback = (error: (Error|null), response?: tendermint.abci.ResponseInitChain) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#beginBlock}.
             * @param error Error, if any
             * @param [response] ResponseBeginBlock
             */
            type BeginBlockCallback = (error: (Error|null), response?: tendermint.abci.ResponseBeginBlock) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#endBlock}.
             * @param error Error, if any
             * @param [response] ResponseEndBlock
             */
            type EndBlockCallback = (error: (Error|null), response?: tendermint.abci.ResponseEndBlock) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#listSnapshots}.
             * @param error Error, if any
             * @param [response] ResponseListSnapshots
             */
            type ListSnapshotsCallback = (error: (Error|null), response?: tendermint.abci.ResponseListSnapshots) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#offerSnapshot}.
             * @param error Error, if any
             * @param [response] ResponseOfferSnapshot
             */
            type OfferSnapshotCallback = (error: (Error|null), response?: tendermint.abci.ResponseOfferSnapshot) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#loadSnapshotChunk}.
             * @param error Error, if any
             * @param [response] ResponseLoadSnapshotChunk
             */
            type LoadSnapshotChunkCallback = (error: (Error|null), response?: tendermint.abci.ResponseLoadSnapshotChunk) => void;

            /**
             * Callback as used by {@link tendermint.abci.ABCIApplication#applySnapshotChunk}.
             * @param error Error, if any
             * @param [response] ResponseApplySnapshotChunk
             */
            type ApplySnapshotChunkCallback = (error: (Error|null), response?: tendermint.abci.ResponseApplySnapshotChunk) => void;
        }
    }

    /** Namespace crypto. */
    namespace crypto {

        /** Properties of a Proof. */
        interface IProof {

            /** Proof total */
            total?: (Long|null);

            /** Proof index */
            index?: (Long|null);

            /** Proof leaf_hash */
            leaf_hash?: (Uint8Array|null);

            /** Proof aunts */
            aunts?: (Uint8Array[]|null);
        }

        /** Represents a Proof. */
        class Proof implements IProof {

            /**
             * Constructs a new Proof.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.crypto.IProof);

            /** Proof total. */
            public total: Long;

            /** Proof index. */
            public index: Long;

            /** Proof leaf_hash. */
            public leaf_hash: Uint8Array;

            /** Proof aunts. */
            public aunts: Uint8Array[];

            /**
             * Encodes the specified Proof message. Does not implicitly {@link tendermint.crypto.Proof.verify|verify} messages.
             * @param message Proof message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.crypto.IProof, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Proof message, length delimited. Does not implicitly {@link tendermint.crypto.Proof.verify|verify} messages.
             * @param message Proof message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.crypto.IProof, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Proof message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Proof
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.crypto.Proof;

            /**
             * Decodes a Proof message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Proof
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.crypto.Proof;

            /**
             * Verifies a Proof message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Proof message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Proof
             */
            public static fromObject(object: { [k: string]: any }): tendermint.crypto.Proof;

            /**
             * Creates a plain object from a Proof message. Also converts values to other types if specified.
             * @param message Proof
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.crypto.Proof, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Proof to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ValueOp. */
        interface IValueOp {

            /** ValueOp key */
            key?: (Uint8Array|null);

            /** ValueOp proof */
            proof?: (tendermint.crypto.IProof|null);
        }

        /** Represents a ValueOp. */
        class ValueOp implements IValueOp {

            /**
             * Constructs a new ValueOp.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.crypto.IValueOp);

            /** ValueOp key. */
            public key: Uint8Array;

            /** ValueOp proof. */
            public proof?: (tendermint.crypto.IProof|null);

            /**
             * Encodes the specified ValueOp message. Does not implicitly {@link tendermint.crypto.ValueOp.verify|verify} messages.
             * @param message ValueOp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.crypto.IValueOp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ValueOp message, length delimited. Does not implicitly {@link tendermint.crypto.ValueOp.verify|verify} messages.
             * @param message ValueOp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.crypto.IValueOp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ValueOp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ValueOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.crypto.ValueOp;

            /**
             * Decodes a ValueOp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ValueOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.crypto.ValueOp;

            /**
             * Verifies a ValueOp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ValueOp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ValueOp
             */
            public static fromObject(object: { [k: string]: any }): tendermint.crypto.ValueOp;

            /**
             * Creates a plain object from a ValueOp message. Also converts values to other types if specified.
             * @param message ValueOp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.crypto.ValueOp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ValueOp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DominoOp. */
        interface IDominoOp {

            /** DominoOp key */
            key?: (string|null);

            /** DominoOp input */
            input?: (string|null);

            /** DominoOp output */
            output?: (string|null);
        }

        /** Represents a DominoOp. */
        class DominoOp implements IDominoOp {

            /**
             * Constructs a new DominoOp.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.crypto.IDominoOp);

            /** DominoOp key. */
            public key: string;

            /** DominoOp input. */
            public input: string;

            /** DominoOp output. */
            public output: string;

            /**
             * Encodes the specified DominoOp message. Does not implicitly {@link tendermint.crypto.DominoOp.verify|verify} messages.
             * @param message DominoOp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.crypto.IDominoOp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DominoOp message, length delimited. Does not implicitly {@link tendermint.crypto.DominoOp.verify|verify} messages.
             * @param message DominoOp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.crypto.IDominoOp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DominoOp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DominoOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.crypto.DominoOp;

            /**
             * Decodes a DominoOp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DominoOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.crypto.DominoOp;

            /**
             * Verifies a DominoOp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DominoOp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DominoOp
             */
            public static fromObject(object: { [k: string]: any }): tendermint.crypto.DominoOp;

            /**
             * Creates a plain object from a DominoOp message. Also converts values to other types if specified.
             * @param message DominoOp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.crypto.DominoOp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DominoOp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProofOp. */
        interface IProofOp {

            /** ProofOp type */
            type?: (string|null);

            /** ProofOp key */
            key?: (Uint8Array|null);

            /** ProofOp data */
            data?: (Uint8Array|null);
        }

        /** Represents a ProofOp. */
        class ProofOp implements IProofOp {

            /**
             * Constructs a new ProofOp.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.crypto.IProofOp);

            /** ProofOp type. */
            public type: string;

            /** ProofOp key. */
            public key: Uint8Array;

            /** ProofOp data. */
            public data: Uint8Array;

            /**
             * Encodes the specified ProofOp message. Does not implicitly {@link tendermint.crypto.ProofOp.verify|verify} messages.
             * @param message ProofOp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.crypto.IProofOp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProofOp message, length delimited. Does not implicitly {@link tendermint.crypto.ProofOp.verify|verify} messages.
             * @param message ProofOp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.crypto.IProofOp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProofOp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProofOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.crypto.ProofOp;

            /**
             * Decodes a ProofOp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProofOp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.crypto.ProofOp;

            /**
             * Verifies a ProofOp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProofOp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProofOp
             */
            public static fromObject(object: { [k: string]: any }): tendermint.crypto.ProofOp;

            /**
             * Creates a plain object from a ProofOp message. Also converts values to other types if specified.
             * @param message ProofOp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.crypto.ProofOp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProofOp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProofOps. */
        interface IProofOps {

            /** ProofOps ops */
            ops?: (tendermint.crypto.IProofOp[]|null);
        }

        /** Represents a ProofOps. */
        class ProofOps implements IProofOps {

            /**
             * Constructs a new ProofOps.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.crypto.IProofOps);

            /** ProofOps ops. */
            public ops: tendermint.crypto.IProofOp[];

            /**
             * Encodes the specified ProofOps message. Does not implicitly {@link tendermint.crypto.ProofOps.verify|verify} messages.
             * @param message ProofOps message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.crypto.IProofOps, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProofOps message, length delimited. Does not implicitly {@link tendermint.crypto.ProofOps.verify|verify} messages.
             * @param message ProofOps message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.crypto.IProofOps, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProofOps message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProofOps
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.crypto.ProofOps;

            /**
             * Decodes a ProofOps message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProofOps
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.crypto.ProofOps;

            /**
             * Verifies a ProofOps message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProofOps message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProofOps
             */
            public static fromObject(object: { [k: string]: any }): tendermint.crypto.ProofOps;

            /**
             * Creates a plain object from a ProofOps message. Also converts values to other types if specified.
             * @param message ProofOps
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.crypto.ProofOps, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProofOps to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PublicKey. */
        interface IPublicKey {

            /** PublicKey ed25519 */
            ed25519?: (Uint8Array|null);
        }

        /** Represents a PublicKey. */
        class PublicKey implements IPublicKey {

            /**
             * Constructs a new PublicKey.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.crypto.IPublicKey);

            /** PublicKey ed25519. */
            public ed25519?: (Uint8Array|null);

            /** PublicKey sum. */
            public sum?: "ed25519";

            /**
             * Encodes the specified PublicKey message. Does not implicitly {@link tendermint.crypto.PublicKey.verify|verify} messages.
             * @param message PublicKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.crypto.IPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PublicKey message, length delimited. Does not implicitly {@link tendermint.crypto.PublicKey.verify|verify} messages.
             * @param message PublicKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.crypto.IPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PublicKey message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PublicKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.crypto.PublicKey;

            /**
             * Decodes a PublicKey message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PublicKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.crypto.PublicKey;

            /**
             * Verifies a PublicKey message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PublicKey message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PublicKey
             */
            public static fromObject(object: { [k: string]: any }): tendermint.crypto.PublicKey;

            /**
             * Creates a plain object from a PublicKey message. Also converts values to other types if specified.
             * @param message PublicKey
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.crypto.PublicKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PublicKey to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PrivateKey. */
        interface IPrivateKey {

            /** PrivateKey ed25519 */
            ed25519?: (Uint8Array|null);
        }

        /** Represents a PrivateKey. */
        class PrivateKey implements IPrivateKey {

            /**
             * Constructs a new PrivateKey.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.crypto.IPrivateKey);

            /** PrivateKey ed25519. */
            public ed25519?: (Uint8Array|null);

            /** PrivateKey sum. */
            public sum?: "ed25519";

            /**
             * Encodes the specified PrivateKey message. Does not implicitly {@link tendermint.crypto.PrivateKey.verify|verify} messages.
             * @param message PrivateKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.crypto.IPrivateKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PrivateKey message, length delimited. Does not implicitly {@link tendermint.crypto.PrivateKey.verify|verify} messages.
             * @param message PrivateKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.crypto.IPrivateKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PrivateKey message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PrivateKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.crypto.PrivateKey;

            /**
             * Decodes a PrivateKey message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PrivateKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.crypto.PrivateKey;

            /**
             * Verifies a PrivateKey message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PrivateKey message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PrivateKey
             */
            public static fromObject(object: { [k: string]: any }): tendermint.crypto.PrivateKey;

            /**
             * Creates a plain object from a PrivateKey message. Also converts values to other types if specified.
             * @param message PrivateKey
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.crypto.PrivateKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PrivateKey to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace types. */
    namespace types {

        /** BlockIDFlag enum. */
        enum BlockIDFlag {
            BLOCK_ID_FLAG_UNKNOWN = 0,
            BLOCK_ID_FLAG_ABSENT = 1,
            BLOCK_ID_FLAG_COMMIT = 2,
            BLOCK_ID_FLAG_NIL = 3
        }

        /** SignedMsgType enum. */
        enum SignedMsgType {
            SIGNED_MSG_TYPE_UNKNOWN = 0,
            SIGNED_MSG_TYPE_PREVOTE = 1,
            SIGNED_MSG_TYPE_PRECOMMIT = 2,
            SIGNED_MSG_TYPE_PROPOSAL = 32
        }

        /** Properties of a PartSetHeader. */
        interface IPartSetHeader {

            /** PartSetHeader total */
            total?: (number|null);

            /** PartSetHeader hash */
            hash?: (Uint8Array|null);
        }

        /** Represents a PartSetHeader. */
        class PartSetHeader implements IPartSetHeader {

            /**
             * Constructs a new PartSetHeader.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IPartSetHeader);

            /** PartSetHeader total. */
            public total: number;

            /** PartSetHeader hash. */
            public hash: Uint8Array;

            /**
             * Encodes the specified PartSetHeader message. Does not implicitly {@link tendermint.types.PartSetHeader.verify|verify} messages.
             * @param message PartSetHeader message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IPartSetHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PartSetHeader message, length delimited. Does not implicitly {@link tendermint.types.PartSetHeader.verify|verify} messages.
             * @param message PartSetHeader message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IPartSetHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PartSetHeader message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PartSetHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.PartSetHeader;

            /**
             * Decodes a PartSetHeader message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PartSetHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.PartSetHeader;

            /**
             * Verifies a PartSetHeader message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PartSetHeader message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PartSetHeader
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.PartSetHeader;

            /**
             * Creates a plain object from a PartSetHeader message. Also converts values to other types if specified.
             * @param message PartSetHeader
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.PartSetHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PartSetHeader to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Part. */
        interface IPart {

            /** Part index */
            index?: (number|null);

            /** Part bytes */
            bytes?: (Uint8Array|null);

            /** Part proof */
            proof?: (tendermint.crypto.IProof|null);
        }

        /** Represents a Part. */
        class Part implements IPart {

            /**
             * Constructs a new Part.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IPart);

            /** Part index. */
            public index: number;

            /** Part bytes. */
            public bytes: Uint8Array;

            /** Part proof. */
            public proof?: (tendermint.crypto.IProof|null);

            /**
             * Encodes the specified Part message. Does not implicitly {@link tendermint.types.Part.verify|verify} messages.
             * @param message Part message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IPart, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Part message, length delimited. Does not implicitly {@link tendermint.types.Part.verify|verify} messages.
             * @param message Part message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IPart, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Part message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Part
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.Part;

            /**
             * Decodes a Part message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Part
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.Part;

            /**
             * Verifies a Part message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Part message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Part
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.Part;

            /**
             * Creates a plain object from a Part message. Also converts values to other types if specified.
             * @param message Part
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.Part, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Part to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BlockID. */
        interface IBlockID {

            /** BlockID hash */
            hash?: (Uint8Array|null);

            /** BlockID part_set_header */
            part_set_header?: (tendermint.types.IPartSetHeader|null);
        }

        /** Represents a BlockID. */
        class BlockID implements IBlockID {

            /**
             * Constructs a new BlockID.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IBlockID);

            /** BlockID hash. */
            public hash: Uint8Array;

            /** BlockID part_set_header. */
            public part_set_header?: (tendermint.types.IPartSetHeader|null);

            /**
             * Encodes the specified BlockID message. Does not implicitly {@link tendermint.types.BlockID.verify|verify} messages.
             * @param message BlockID message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IBlockID, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BlockID message, length delimited. Does not implicitly {@link tendermint.types.BlockID.verify|verify} messages.
             * @param message BlockID message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IBlockID, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BlockID message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BlockID
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.BlockID;

            /**
             * Decodes a BlockID message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BlockID
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.BlockID;

            /**
             * Verifies a BlockID message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BlockID message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BlockID
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.BlockID;

            /**
             * Creates a plain object from a BlockID message. Also converts values to other types if specified.
             * @param message BlockID
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.BlockID, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BlockID to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Header. */
        interface IHeader {

            /** Header version */
            version?: (tendermint.version.IConsensus|null);

            /** Header chain_id */
            chain_id?: (string|null);

            /** Header height */
            height?: (Long|null);

            /** Header time */
            time?: (google.protobuf.ITimestamp|null);

            /** Header last_block_id */
            last_block_id?: (tendermint.types.IBlockID|null);

            /** Header last_commit_hash */
            last_commit_hash?: (Uint8Array|null);

            /** Header data_hash */
            data_hash?: (Uint8Array|null);

            /** Header validators_hash */
            validators_hash?: (Uint8Array|null);

            /** Header next_validators_hash */
            next_validators_hash?: (Uint8Array|null);

            /** Header consensus_hash */
            consensus_hash?: (Uint8Array|null);

            /** Header app_hash */
            app_hash?: (Uint8Array|null);

            /** Header last_results_hash */
            last_results_hash?: (Uint8Array|null);

            /** Header evidence_hash */
            evidence_hash?: (Uint8Array|null);

            /** Header proposer_address */
            proposer_address?: (Uint8Array|null);
        }

        /** Represents a Header. */
        class Header implements IHeader {

            /**
             * Constructs a new Header.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IHeader);

            /** Header version. */
            public version?: (tendermint.version.IConsensus|null);

            /** Header chain_id. */
            public chain_id: string;

            /** Header height. */
            public height: Long;

            /** Header time. */
            public time?: (google.protobuf.ITimestamp|null);

            /** Header last_block_id. */
            public last_block_id?: (tendermint.types.IBlockID|null);

            /** Header last_commit_hash. */
            public last_commit_hash: Uint8Array;

            /** Header data_hash. */
            public data_hash: Uint8Array;

            /** Header validators_hash. */
            public validators_hash: Uint8Array;

            /** Header next_validators_hash. */
            public next_validators_hash: Uint8Array;

            /** Header consensus_hash. */
            public consensus_hash: Uint8Array;

            /** Header app_hash. */
            public app_hash: Uint8Array;

            /** Header last_results_hash. */
            public last_results_hash: Uint8Array;

            /** Header evidence_hash. */
            public evidence_hash: Uint8Array;

            /** Header proposer_address. */
            public proposer_address: Uint8Array;

            /**
             * Encodes the specified Header message. Does not implicitly {@link tendermint.types.Header.verify|verify} messages.
             * @param message Header message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Header message, length delimited. Does not implicitly {@link tendermint.types.Header.verify|verify} messages.
             * @param message Header message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Header message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Header
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.Header;

            /**
             * Decodes a Header message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Header
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.Header;

            /**
             * Verifies a Header message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Header message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Header
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.Header;

            /**
             * Creates a plain object from a Header message. Also converts values to other types if specified.
             * @param message Header
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.Header, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Header to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Data. */
        interface IData {

            /** Data txs */
            txs?: (Uint8Array[]|null);

            /** Data hash */
            hash?: (Uint8Array|null);
        }

        /** Represents a Data. */
        class Data implements IData {

            /**
             * Constructs a new Data.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IData);

            /** Data txs. */
            public txs: Uint8Array[];

            /** Data hash. */
            public hash: Uint8Array;

            /**
             * Encodes the specified Data message. Does not implicitly {@link tendermint.types.Data.verify|verify} messages.
             * @param message Data message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Data message, length delimited. Does not implicitly {@link tendermint.types.Data.verify|verify} messages.
             * @param message Data message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Data message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Data
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.Data;

            /**
             * Decodes a Data message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Data
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.Data;

            /**
             * Verifies a Data message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Data message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Data
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.Data;

            /**
             * Creates a plain object from a Data message. Also converts values to other types if specified.
             * @param message Data
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.Data, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Data to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Vote. */
        interface IVote {

            /** Vote type */
            type?: (tendermint.types.SignedMsgType|null);

            /** Vote height */
            height?: (Long|null);

            /** Vote round */
            round?: (number|null);

            /** Vote block_id */
            block_id?: (tendermint.types.IBlockID|null);

            /** Vote timestamp */
            timestamp?: (google.protobuf.ITimestamp|null);

            /** Vote validator_address */
            validator_address?: (Uint8Array|null);

            /** Vote validator_index */
            validator_index?: (number|null);

            /** Vote signature */
            signature?: (Uint8Array|null);
        }

        /** Represents a Vote. */
        class Vote implements IVote {

            /**
             * Constructs a new Vote.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IVote);

            /** Vote type. */
            public type: tendermint.types.SignedMsgType;

            /** Vote height. */
            public height: Long;

            /** Vote round. */
            public round: number;

            /** Vote block_id. */
            public block_id?: (tendermint.types.IBlockID|null);

            /** Vote timestamp. */
            public timestamp?: (google.protobuf.ITimestamp|null);

            /** Vote validator_address. */
            public validator_address: Uint8Array;

            /** Vote validator_index. */
            public validator_index: number;

            /** Vote signature. */
            public signature: Uint8Array;

            /**
             * Encodes the specified Vote message. Does not implicitly {@link tendermint.types.Vote.verify|verify} messages.
             * @param message Vote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IVote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Vote message, length delimited. Does not implicitly {@link tendermint.types.Vote.verify|verify} messages.
             * @param message Vote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IVote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Vote message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Vote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.Vote;

            /**
             * Decodes a Vote message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Vote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.Vote;

            /**
             * Verifies a Vote message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Vote message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Vote
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.Vote;

            /**
             * Creates a plain object from a Vote message. Also converts values to other types if specified.
             * @param message Vote
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.Vote, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Vote to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Commit. */
        interface ICommit {

            /** Commit height */
            height?: (Long|null);

            /** Commit round */
            round?: (number|null);

            /** Commit block_id */
            block_id?: (tendermint.types.IBlockID|null);

            /** Commit signatures */
            signatures?: (tendermint.types.ICommitSig[]|null);

            /** Commit hash */
            hash?: (Uint8Array|null);

            /** Commit bit_array */
            bit_array?: (tendermint.libs.bits.IBitArray|null);
        }

        /** Represents a Commit. */
        class Commit implements ICommit {

            /**
             * Constructs a new Commit.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.ICommit);

            /** Commit height. */
            public height: Long;

            /** Commit round. */
            public round: number;

            /** Commit block_id. */
            public block_id?: (tendermint.types.IBlockID|null);

            /** Commit signatures. */
            public signatures: tendermint.types.ICommitSig[];

            /** Commit hash. */
            public hash: Uint8Array;

            /** Commit bit_array. */
            public bit_array?: (tendermint.libs.bits.IBitArray|null);

            /**
             * Encodes the specified Commit message. Does not implicitly {@link tendermint.types.Commit.verify|verify} messages.
             * @param message Commit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.ICommit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Commit message, length delimited. Does not implicitly {@link tendermint.types.Commit.verify|verify} messages.
             * @param message Commit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.ICommit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Commit message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Commit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.Commit;

            /**
             * Decodes a Commit message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Commit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.Commit;

            /**
             * Verifies a Commit message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Commit message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Commit
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.Commit;

            /**
             * Creates a plain object from a Commit message. Also converts values to other types if specified.
             * @param message Commit
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.Commit, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Commit to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CommitSig. */
        interface ICommitSig {

            /** CommitSig block_id_flag */
            block_id_flag?: (tendermint.types.BlockIDFlag|null);

            /** CommitSig validator_address */
            validator_address?: (Uint8Array|null);

            /** CommitSig timestamp */
            timestamp?: (google.protobuf.ITimestamp|null);

            /** CommitSig signature */
            signature?: (Uint8Array|null);
        }

        /** Represents a CommitSig. */
        class CommitSig implements ICommitSig {

            /**
             * Constructs a new CommitSig.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.ICommitSig);

            /** CommitSig block_id_flag. */
            public block_id_flag: tendermint.types.BlockIDFlag;

            /** CommitSig validator_address. */
            public validator_address: Uint8Array;

            /** CommitSig timestamp. */
            public timestamp?: (google.protobuf.ITimestamp|null);

            /** CommitSig signature. */
            public signature: Uint8Array;

            /**
             * Encodes the specified CommitSig message. Does not implicitly {@link tendermint.types.CommitSig.verify|verify} messages.
             * @param message CommitSig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.ICommitSig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CommitSig message, length delimited. Does not implicitly {@link tendermint.types.CommitSig.verify|verify} messages.
             * @param message CommitSig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.ICommitSig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CommitSig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CommitSig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.CommitSig;

            /**
             * Decodes a CommitSig message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CommitSig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.CommitSig;

            /**
             * Verifies a CommitSig message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CommitSig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CommitSig
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.CommitSig;

            /**
             * Creates a plain object from a CommitSig message. Also converts values to other types if specified.
             * @param message CommitSig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.CommitSig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CommitSig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Proposal. */
        interface IProposal {

            /** Proposal type */
            type?: (tendermint.types.SignedMsgType|null);

            /** Proposal height */
            height?: (Long|null);

            /** Proposal round */
            round?: (number|null);

            /** Proposal pol_round */
            pol_round?: (number|null);

            /** Proposal block_id */
            block_id?: (tendermint.types.IBlockID|null);

            /** Proposal timestamp */
            timestamp?: (google.protobuf.ITimestamp|null);

            /** Proposal signature */
            signature?: (Uint8Array|null);
        }

        /** Represents a Proposal. */
        class Proposal implements IProposal {

            /**
             * Constructs a new Proposal.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IProposal);

            /** Proposal type. */
            public type: tendermint.types.SignedMsgType;

            /** Proposal height. */
            public height: Long;

            /** Proposal round. */
            public round: number;

            /** Proposal pol_round. */
            public pol_round: number;

            /** Proposal block_id. */
            public block_id?: (tendermint.types.IBlockID|null);

            /** Proposal timestamp. */
            public timestamp?: (google.protobuf.ITimestamp|null);

            /** Proposal signature. */
            public signature: Uint8Array;

            /**
             * Encodes the specified Proposal message. Does not implicitly {@link tendermint.types.Proposal.verify|verify} messages.
             * @param message Proposal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IProposal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Proposal message, length delimited. Does not implicitly {@link tendermint.types.Proposal.verify|verify} messages.
             * @param message Proposal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IProposal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Proposal message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Proposal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.Proposal;

            /**
             * Decodes a Proposal message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Proposal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.Proposal;

            /**
             * Verifies a Proposal message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Proposal message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Proposal
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.Proposal;

            /**
             * Creates a plain object from a Proposal message. Also converts values to other types if specified.
             * @param message Proposal
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.Proposal, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Proposal to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SignedHeader. */
        interface ISignedHeader {

            /** SignedHeader header */
            header?: (tendermint.types.IHeader|null);

            /** SignedHeader commit */
            commit?: (tendermint.types.ICommit|null);
        }

        /** Represents a SignedHeader. */
        class SignedHeader implements ISignedHeader {

            /**
             * Constructs a new SignedHeader.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.ISignedHeader);

            /** SignedHeader header. */
            public header?: (tendermint.types.IHeader|null);

            /** SignedHeader commit. */
            public commit?: (tendermint.types.ICommit|null);

            /**
             * Encodes the specified SignedHeader message. Does not implicitly {@link tendermint.types.SignedHeader.verify|verify} messages.
             * @param message SignedHeader message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.ISignedHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SignedHeader message, length delimited. Does not implicitly {@link tendermint.types.SignedHeader.verify|verify} messages.
             * @param message SignedHeader message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.ISignedHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SignedHeader message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SignedHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.SignedHeader;

            /**
             * Decodes a SignedHeader message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SignedHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.SignedHeader;

            /**
             * Verifies a SignedHeader message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SignedHeader message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SignedHeader
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.SignedHeader;

            /**
             * Creates a plain object from a SignedHeader message. Also converts values to other types if specified.
             * @param message SignedHeader
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.SignedHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SignedHeader to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BlockMeta. */
        interface IBlockMeta {

            /** BlockMeta block_id */
            block_id?: (tendermint.types.IBlockID|null);

            /** BlockMeta block_size */
            block_size?: (Long|null);

            /** BlockMeta header */
            header?: (tendermint.types.IHeader|null);

            /** BlockMeta num_txs */
            num_txs?: (Long|null);
        }

        /** Represents a BlockMeta. */
        class BlockMeta implements IBlockMeta {

            /**
             * Constructs a new BlockMeta.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IBlockMeta);

            /** BlockMeta block_id. */
            public block_id?: (tendermint.types.IBlockID|null);

            /** BlockMeta block_size. */
            public block_size: Long;

            /** BlockMeta header. */
            public header?: (tendermint.types.IHeader|null);

            /** BlockMeta num_txs. */
            public num_txs: Long;

            /**
             * Encodes the specified BlockMeta message. Does not implicitly {@link tendermint.types.BlockMeta.verify|verify} messages.
             * @param message BlockMeta message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IBlockMeta, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BlockMeta message, length delimited. Does not implicitly {@link tendermint.types.BlockMeta.verify|verify} messages.
             * @param message BlockMeta message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IBlockMeta, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BlockMeta message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BlockMeta
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.BlockMeta;

            /**
             * Decodes a BlockMeta message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BlockMeta
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.BlockMeta;

            /**
             * Verifies a BlockMeta message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BlockMeta message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BlockMeta
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.BlockMeta;

            /**
             * Creates a plain object from a BlockMeta message. Also converts values to other types if specified.
             * @param message BlockMeta
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.BlockMeta, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BlockMeta to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TxProof. */
        interface ITxProof {

            /** TxProof root_hash */
            root_hash?: (Uint8Array|null);

            /** TxProof data */
            data?: (Uint8Array|null);

            /** TxProof proof */
            proof?: (tendermint.crypto.IProof|null);
        }

        /** Represents a TxProof. */
        class TxProof implements ITxProof {

            /**
             * Constructs a new TxProof.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.ITxProof);

            /** TxProof root_hash. */
            public root_hash: Uint8Array;

            /** TxProof data. */
            public data: Uint8Array;

            /** TxProof proof. */
            public proof?: (tendermint.crypto.IProof|null);

            /**
             * Encodes the specified TxProof message. Does not implicitly {@link tendermint.types.TxProof.verify|verify} messages.
             * @param message TxProof message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.ITxProof, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TxProof message, length delimited. Does not implicitly {@link tendermint.types.TxProof.verify|verify} messages.
             * @param message TxProof message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.ITxProof, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TxProof message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TxProof
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.TxProof;

            /**
             * Decodes a TxProof message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TxProof
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.TxProof;

            /**
             * Verifies a TxProof message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TxProof message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TxProof
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.TxProof;

            /**
             * Creates a plain object from a TxProof message. Also converts values to other types if specified.
             * @param message TxProof
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.TxProof, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TxProof to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ConsensusParams. */
        interface IConsensusParams {

            /** ConsensusParams block */
            block?: (tendermint.types.IBlockParams|null);

            /** ConsensusParams evidence */
            evidence?: (tendermint.types.IEvidenceParams|null);

            /** ConsensusParams validator */
            validator?: (tendermint.types.IValidatorParams|null);

            /** ConsensusParams version */
            version?: (tendermint.types.IVersionParams|null);
        }

        /** Represents a ConsensusParams. */
        class ConsensusParams implements IConsensusParams {

            /**
             * Constructs a new ConsensusParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IConsensusParams);

            /** ConsensusParams block. */
            public block?: (tendermint.types.IBlockParams|null);

            /** ConsensusParams evidence. */
            public evidence?: (tendermint.types.IEvidenceParams|null);

            /** ConsensusParams validator. */
            public validator?: (tendermint.types.IValidatorParams|null);

            /** ConsensusParams version. */
            public version?: (tendermint.types.IVersionParams|null);

            /**
             * Encodes the specified ConsensusParams message. Does not implicitly {@link tendermint.types.ConsensusParams.verify|verify} messages.
             * @param message ConsensusParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IConsensusParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ConsensusParams message, length delimited. Does not implicitly {@link tendermint.types.ConsensusParams.verify|verify} messages.
             * @param message ConsensusParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IConsensusParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ConsensusParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ConsensusParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.ConsensusParams;

            /**
             * Decodes a ConsensusParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ConsensusParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.ConsensusParams;

            /**
             * Verifies a ConsensusParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ConsensusParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ConsensusParams
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.ConsensusParams;

            /**
             * Creates a plain object from a ConsensusParams message. Also converts values to other types if specified.
             * @param message ConsensusParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.ConsensusParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ConsensusParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BlockParams. */
        interface IBlockParams {

            /** BlockParams max_bytes */
            max_bytes?: (Long|null);

            /** BlockParams max_gas */
            max_gas?: (Long|null);

            /** BlockParams time_iota_ms */
            time_iota_ms?: (Long|null);
        }

        /** Represents a BlockParams. */
        class BlockParams implements IBlockParams {

            /**
             * Constructs a new BlockParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IBlockParams);

            /** BlockParams max_bytes. */
            public max_bytes: Long;

            /** BlockParams max_gas. */
            public max_gas: Long;

            /** BlockParams time_iota_ms. */
            public time_iota_ms: Long;

            /**
             * Encodes the specified BlockParams message. Does not implicitly {@link tendermint.types.BlockParams.verify|verify} messages.
             * @param message BlockParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IBlockParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BlockParams message, length delimited. Does not implicitly {@link tendermint.types.BlockParams.verify|verify} messages.
             * @param message BlockParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IBlockParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BlockParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BlockParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.BlockParams;

            /**
             * Decodes a BlockParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BlockParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.BlockParams;

            /**
             * Verifies a BlockParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BlockParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BlockParams
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.BlockParams;

            /**
             * Creates a plain object from a BlockParams message. Also converts values to other types if specified.
             * @param message BlockParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.BlockParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BlockParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EvidenceParams. */
        interface IEvidenceParams {

            /** EvidenceParams max_age_num_blocks */
            max_age_num_blocks?: (Long|null);

            /** EvidenceParams max_age_duration */
            max_age_duration?: (google.protobuf.IDuration|null);

            /** EvidenceParams max_num */
            max_num?: (number|null);

            /** EvidenceParams proof_trial_period */
            proof_trial_period?: (Long|null);
        }

        /** Represents an EvidenceParams. */
        class EvidenceParams implements IEvidenceParams {

            /**
             * Constructs a new EvidenceParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IEvidenceParams);

            /** EvidenceParams max_age_num_blocks. */
            public max_age_num_blocks: Long;

            /** EvidenceParams max_age_duration. */
            public max_age_duration?: (google.protobuf.IDuration|null);

            /** EvidenceParams max_num. */
            public max_num: number;

            /** EvidenceParams proof_trial_period. */
            public proof_trial_period: Long;

            /**
             * Encodes the specified EvidenceParams message. Does not implicitly {@link tendermint.types.EvidenceParams.verify|verify} messages.
             * @param message EvidenceParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IEvidenceParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EvidenceParams message, length delimited. Does not implicitly {@link tendermint.types.EvidenceParams.verify|verify} messages.
             * @param message EvidenceParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IEvidenceParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EvidenceParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EvidenceParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.EvidenceParams;

            /**
             * Decodes an EvidenceParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EvidenceParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.EvidenceParams;

            /**
             * Verifies an EvidenceParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EvidenceParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EvidenceParams
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.EvidenceParams;

            /**
             * Creates a plain object from an EvidenceParams message. Also converts values to other types if specified.
             * @param message EvidenceParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.EvidenceParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EvidenceParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ValidatorParams. */
        interface IValidatorParams {

            /** ValidatorParams pub_key_types */
            pub_key_types?: (string[]|null);
        }

        /** Represents a ValidatorParams. */
        class ValidatorParams implements IValidatorParams {

            /**
             * Constructs a new ValidatorParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IValidatorParams);

            /** ValidatorParams pub_key_types. */
            public pub_key_types: string[];

            /**
             * Encodes the specified ValidatorParams message. Does not implicitly {@link tendermint.types.ValidatorParams.verify|verify} messages.
             * @param message ValidatorParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IValidatorParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ValidatorParams message, length delimited. Does not implicitly {@link tendermint.types.ValidatorParams.verify|verify} messages.
             * @param message ValidatorParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IValidatorParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ValidatorParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ValidatorParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.ValidatorParams;

            /**
             * Decodes a ValidatorParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ValidatorParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.ValidatorParams;

            /**
             * Verifies a ValidatorParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ValidatorParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ValidatorParams
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.ValidatorParams;

            /**
             * Creates a plain object from a ValidatorParams message. Also converts values to other types if specified.
             * @param message ValidatorParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.ValidatorParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ValidatorParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a VersionParams. */
        interface IVersionParams {

            /** VersionParams app_version */
            app_version?: (Long|null);
        }

        /** Represents a VersionParams. */
        class VersionParams implements IVersionParams {

            /**
             * Constructs a new VersionParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IVersionParams);

            /** VersionParams app_version. */
            public app_version: Long;

            /**
             * Encodes the specified VersionParams message. Does not implicitly {@link tendermint.types.VersionParams.verify|verify} messages.
             * @param message VersionParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IVersionParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VersionParams message, length delimited. Does not implicitly {@link tendermint.types.VersionParams.verify|verify} messages.
             * @param message VersionParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IVersionParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VersionParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VersionParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.VersionParams;

            /**
             * Decodes a VersionParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VersionParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.VersionParams;

            /**
             * Verifies a VersionParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VersionParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VersionParams
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.VersionParams;

            /**
             * Creates a plain object from a VersionParams message. Also converts values to other types if specified.
             * @param message VersionParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.VersionParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VersionParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HashedParams. */
        interface IHashedParams {

            /** HashedParams block_max_bytes */
            block_max_bytes?: (Long|null);

            /** HashedParams block_max_gas */
            block_max_gas?: (Long|null);
        }

        /** Represents a HashedParams. */
        class HashedParams implements IHashedParams {

            /**
             * Constructs a new HashedParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IHashedParams);

            /** HashedParams block_max_bytes. */
            public block_max_bytes: Long;

            /** HashedParams block_max_gas. */
            public block_max_gas: Long;

            /**
             * Encodes the specified HashedParams message. Does not implicitly {@link tendermint.types.HashedParams.verify|verify} messages.
             * @param message HashedParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IHashedParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HashedParams message, length delimited. Does not implicitly {@link tendermint.types.HashedParams.verify|verify} messages.
             * @param message HashedParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IHashedParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HashedParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HashedParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.HashedParams;

            /**
             * Decodes a HashedParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HashedParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.HashedParams;

            /**
             * Verifies a HashedParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HashedParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HashedParams
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.HashedParams;

            /**
             * Creates a plain object from a HashedParams message. Also converts values to other types if specified.
             * @param message HashedParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.HashedParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HashedParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DuplicateVoteEvidence. */
        interface IDuplicateVoteEvidence {

            /** DuplicateVoteEvidence vote_a */
            vote_a?: (tendermint.types.IVote|null);

            /** DuplicateVoteEvidence vote_b */
            vote_b?: (tendermint.types.IVote|null);

            /** DuplicateVoteEvidence timestamp */
            timestamp?: (google.protobuf.ITimestamp|null);
        }

        /** Represents a DuplicateVoteEvidence. */
        class DuplicateVoteEvidence implements IDuplicateVoteEvidence {

            /**
             * Constructs a new DuplicateVoteEvidence.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IDuplicateVoteEvidence);

            /** DuplicateVoteEvidence vote_a. */
            public vote_a?: (tendermint.types.IVote|null);

            /** DuplicateVoteEvidence vote_b. */
            public vote_b?: (tendermint.types.IVote|null);

            /** DuplicateVoteEvidence timestamp. */
            public timestamp?: (google.protobuf.ITimestamp|null);

            /**
             * Encodes the specified DuplicateVoteEvidence message. Does not implicitly {@link tendermint.types.DuplicateVoteEvidence.verify|verify} messages.
             * @param message DuplicateVoteEvidence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IDuplicateVoteEvidence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DuplicateVoteEvidence message, length delimited. Does not implicitly {@link tendermint.types.DuplicateVoteEvidence.verify|verify} messages.
             * @param message DuplicateVoteEvidence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IDuplicateVoteEvidence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DuplicateVoteEvidence message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DuplicateVoteEvidence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.DuplicateVoteEvidence;

            /**
             * Decodes a DuplicateVoteEvidence message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DuplicateVoteEvidence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.DuplicateVoteEvidence;

            /**
             * Verifies a DuplicateVoteEvidence message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DuplicateVoteEvidence message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DuplicateVoteEvidence
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.DuplicateVoteEvidence;

            /**
             * Creates a plain object from a DuplicateVoteEvidence message. Also converts values to other types if specified.
             * @param message DuplicateVoteEvidence
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.DuplicateVoteEvidence, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DuplicateVoteEvidence to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PotentialAmnesiaEvidence. */
        interface IPotentialAmnesiaEvidence {

            /** PotentialAmnesiaEvidence vote_a */
            vote_a?: (tendermint.types.IVote|null);

            /** PotentialAmnesiaEvidence vote_b */
            vote_b?: (tendermint.types.IVote|null);

            /** PotentialAmnesiaEvidence height_stamp */
            height_stamp?: (Long|null);

            /** PotentialAmnesiaEvidence timestamp */
            timestamp?: (google.protobuf.ITimestamp|null);
        }

        /** Represents a PotentialAmnesiaEvidence. */
        class PotentialAmnesiaEvidence implements IPotentialAmnesiaEvidence {

            /**
             * Constructs a new PotentialAmnesiaEvidence.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IPotentialAmnesiaEvidence);

            /** PotentialAmnesiaEvidence vote_a. */
            public vote_a?: (tendermint.types.IVote|null);

            /** PotentialAmnesiaEvidence vote_b. */
            public vote_b?: (tendermint.types.IVote|null);

            /** PotentialAmnesiaEvidence height_stamp. */
            public height_stamp: Long;

            /** PotentialAmnesiaEvidence timestamp. */
            public timestamp?: (google.protobuf.ITimestamp|null);

            /**
             * Encodes the specified PotentialAmnesiaEvidence message. Does not implicitly {@link tendermint.types.PotentialAmnesiaEvidence.verify|verify} messages.
             * @param message PotentialAmnesiaEvidence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IPotentialAmnesiaEvidence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PotentialAmnesiaEvidence message, length delimited. Does not implicitly {@link tendermint.types.PotentialAmnesiaEvidence.verify|verify} messages.
             * @param message PotentialAmnesiaEvidence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IPotentialAmnesiaEvidence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PotentialAmnesiaEvidence message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PotentialAmnesiaEvidence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.PotentialAmnesiaEvidence;

            /**
             * Decodes a PotentialAmnesiaEvidence message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PotentialAmnesiaEvidence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.PotentialAmnesiaEvidence;

            /**
             * Verifies a PotentialAmnesiaEvidence message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PotentialAmnesiaEvidence message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PotentialAmnesiaEvidence
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.PotentialAmnesiaEvidence;

            /**
             * Creates a plain object from a PotentialAmnesiaEvidence message. Also converts values to other types if specified.
             * @param message PotentialAmnesiaEvidence
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.PotentialAmnesiaEvidence, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PotentialAmnesiaEvidence to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AmnesiaEvidence. */
        interface IAmnesiaEvidence {

            /** AmnesiaEvidence potential_amnesia_evidence */
            potential_amnesia_evidence?: (tendermint.types.IPotentialAmnesiaEvidence|null);

            /** AmnesiaEvidence polc */
            polc?: (tendermint.types.IProofOfLockChange|null);
        }

        /** Represents an AmnesiaEvidence. */
        class AmnesiaEvidence implements IAmnesiaEvidence {

            /**
             * Constructs a new AmnesiaEvidence.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IAmnesiaEvidence);

            /** AmnesiaEvidence potential_amnesia_evidence. */
            public potential_amnesia_evidence?: (tendermint.types.IPotentialAmnesiaEvidence|null);

            /** AmnesiaEvidence polc. */
            public polc?: (tendermint.types.IProofOfLockChange|null);

            /**
             * Encodes the specified AmnesiaEvidence message. Does not implicitly {@link tendermint.types.AmnesiaEvidence.verify|verify} messages.
             * @param message AmnesiaEvidence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IAmnesiaEvidence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AmnesiaEvidence message, length delimited. Does not implicitly {@link tendermint.types.AmnesiaEvidence.verify|verify} messages.
             * @param message AmnesiaEvidence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IAmnesiaEvidence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AmnesiaEvidence message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AmnesiaEvidence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.AmnesiaEvidence;

            /**
             * Decodes an AmnesiaEvidence message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AmnesiaEvidence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.AmnesiaEvidence;

            /**
             * Verifies an AmnesiaEvidence message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AmnesiaEvidence message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AmnesiaEvidence
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.AmnesiaEvidence;

            /**
             * Creates a plain object from an AmnesiaEvidence message. Also converts values to other types if specified.
             * @param message AmnesiaEvidence
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.AmnesiaEvidence, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AmnesiaEvidence to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ConflictingHeadersEvidence. */
        interface IConflictingHeadersEvidence {

            /** ConflictingHeadersEvidence h1 */
            h1?: (tendermint.types.ISignedHeader|null);

            /** ConflictingHeadersEvidence h2 */
            h2?: (tendermint.types.ISignedHeader|null);
        }

        /** Represents a ConflictingHeadersEvidence. */
        class ConflictingHeadersEvidence implements IConflictingHeadersEvidence {

            /**
             * Constructs a new ConflictingHeadersEvidence.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IConflictingHeadersEvidence);

            /** ConflictingHeadersEvidence h1. */
            public h1?: (tendermint.types.ISignedHeader|null);

            /** ConflictingHeadersEvidence h2. */
            public h2?: (tendermint.types.ISignedHeader|null);

            /**
             * Encodes the specified ConflictingHeadersEvidence message. Does not implicitly {@link tendermint.types.ConflictingHeadersEvidence.verify|verify} messages.
             * @param message ConflictingHeadersEvidence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IConflictingHeadersEvidence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ConflictingHeadersEvidence message, length delimited. Does not implicitly {@link tendermint.types.ConflictingHeadersEvidence.verify|verify} messages.
             * @param message ConflictingHeadersEvidence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IConflictingHeadersEvidence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ConflictingHeadersEvidence message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ConflictingHeadersEvidence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.ConflictingHeadersEvidence;

            /**
             * Decodes a ConflictingHeadersEvidence message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ConflictingHeadersEvidence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.ConflictingHeadersEvidence;

            /**
             * Verifies a ConflictingHeadersEvidence message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ConflictingHeadersEvidence message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ConflictingHeadersEvidence
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.ConflictingHeadersEvidence;

            /**
             * Creates a plain object from a ConflictingHeadersEvidence message. Also converts values to other types if specified.
             * @param message ConflictingHeadersEvidence
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.ConflictingHeadersEvidence, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ConflictingHeadersEvidence to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LunaticValidatorEvidence. */
        interface ILunaticValidatorEvidence {

            /** LunaticValidatorEvidence header */
            header?: (tendermint.types.IHeader|null);

            /** LunaticValidatorEvidence vote */
            vote?: (tendermint.types.IVote|null);

            /** LunaticValidatorEvidence invalid_header_field */
            invalid_header_field?: (string|null);

            /** LunaticValidatorEvidence timestamp */
            timestamp?: (google.protobuf.ITimestamp|null);
        }

        /** Represents a LunaticValidatorEvidence. */
        class LunaticValidatorEvidence implements ILunaticValidatorEvidence {

            /**
             * Constructs a new LunaticValidatorEvidence.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.ILunaticValidatorEvidence);

            /** LunaticValidatorEvidence header. */
            public header?: (tendermint.types.IHeader|null);

            /** LunaticValidatorEvidence vote. */
            public vote?: (tendermint.types.IVote|null);

            /** LunaticValidatorEvidence invalid_header_field. */
            public invalid_header_field: string;

            /** LunaticValidatorEvidence timestamp. */
            public timestamp?: (google.protobuf.ITimestamp|null);

            /**
             * Encodes the specified LunaticValidatorEvidence message. Does not implicitly {@link tendermint.types.LunaticValidatorEvidence.verify|verify} messages.
             * @param message LunaticValidatorEvidence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.ILunaticValidatorEvidence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LunaticValidatorEvidence message, length delimited. Does not implicitly {@link tendermint.types.LunaticValidatorEvidence.verify|verify} messages.
             * @param message LunaticValidatorEvidence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.ILunaticValidatorEvidence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LunaticValidatorEvidence message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LunaticValidatorEvidence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.LunaticValidatorEvidence;

            /**
             * Decodes a LunaticValidatorEvidence message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LunaticValidatorEvidence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.LunaticValidatorEvidence;

            /**
             * Verifies a LunaticValidatorEvidence message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LunaticValidatorEvidence message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LunaticValidatorEvidence
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.LunaticValidatorEvidence;

            /**
             * Creates a plain object from a LunaticValidatorEvidence message. Also converts values to other types if specified.
             * @param message LunaticValidatorEvidence
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.LunaticValidatorEvidence, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LunaticValidatorEvidence to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Evidence. */
        interface IEvidence {

            /** Evidence duplicate_vote_evidence */
            duplicate_vote_evidence?: (tendermint.types.IDuplicateVoteEvidence|null);

            /** Evidence conflicting_headers_evidence */
            conflicting_headers_evidence?: (tendermint.types.IConflictingHeadersEvidence|null);

            /** Evidence lunatic_validator_evidence */
            lunatic_validator_evidence?: (tendermint.types.ILunaticValidatorEvidence|null);

            /** Evidence potential_amnesia_evidence */
            potential_amnesia_evidence?: (tendermint.types.IPotentialAmnesiaEvidence|null);

            /** Evidence amnesia_evidence */
            amnesia_evidence?: (tendermint.types.IAmnesiaEvidence|null);
        }

        /** Represents an Evidence. */
        class Evidence implements IEvidence {

            /**
             * Constructs a new Evidence.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IEvidence);

            /** Evidence duplicate_vote_evidence. */
            public duplicate_vote_evidence?: (tendermint.types.IDuplicateVoteEvidence|null);

            /** Evidence conflicting_headers_evidence. */
            public conflicting_headers_evidence?: (tendermint.types.IConflictingHeadersEvidence|null);

            /** Evidence lunatic_validator_evidence. */
            public lunatic_validator_evidence?: (tendermint.types.ILunaticValidatorEvidence|null);

            /** Evidence potential_amnesia_evidence. */
            public potential_amnesia_evidence?: (tendermint.types.IPotentialAmnesiaEvidence|null);

            /** Evidence amnesia_evidence. */
            public amnesia_evidence?: (tendermint.types.IAmnesiaEvidence|null);

            /** Evidence sum. */
            public sum?: ("duplicate_vote_evidence"|"conflicting_headers_evidence"|"lunatic_validator_evidence"|"potential_amnesia_evidence"|"amnesia_evidence");

            /**
             * Encodes the specified Evidence message. Does not implicitly {@link tendermint.types.Evidence.verify|verify} messages.
             * @param message Evidence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IEvidence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Evidence message, length delimited. Does not implicitly {@link tendermint.types.Evidence.verify|verify} messages.
             * @param message Evidence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IEvidence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Evidence message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Evidence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.Evidence;

            /**
             * Decodes an Evidence message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Evidence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.Evidence;

            /**
             * Verifies an Evidence message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Evidence message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Evidence
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.Evidence;

            /**
             * Creates a plain object from an Evidence message. Also converts values to other types if specified.
             * @param message Evidence
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.Evidence, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Evidence to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EvidenceData. */
        interface IEvidenceData {

            /** EvidenceData evidence */
            evidence?: (tendermint.types.IEvidence[]|null);

            /** EvidenceData hash */
            hash?: (Uint8Array|null);
        }

        /** Represents an EvidenceData. */
        class EvidenceData implements IEvidenceData {

            /**
             * Constructs a new EvidenceData.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IEvidenceData);

            /** EvidenceData evidence. */
            public evidence: tendermint.types.IEvidence[];

            /** EvidenceData hash. */
            public hash: Uint8Array;

            /**
             * Encodes the specified EvidenceData message. Does not implicitly {@link tendermint.types.EvidenceData.verify|verify} messages.
             * @param message EvidenceData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IEvidenceData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EvidenceData message, length delimited. Does not implicitly {@link tendermint.types.EvidenceData.verify|verify} messages.
             * @param message EvidenceData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IEvidenceData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EvidenceData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EvidenceData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.EvidenceData;

            /**
             * Decodes an EvidenceData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EvidenceData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.EvidenceData;

            /**
             * Verifies an EvidenceData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EvidenceData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EvidenceData
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.EvidenceData;

            /**
             * Creates a plain object from an EvidenceData message. Also converts values to other types if specified.
             * @param message EvidenceData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.EvidenceData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EvidenceData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProofOfLockChange. */
        interface IProofOfLockChange {

            /** ProofOfLockChange votes */
            votes?: (tendermint.types.IVote[]|null);

            /** ProofOfLockChange pub_key */
            pub_key?: (tendermint.crypto.IPublicKey|null);
        }

        /** Represents a ProofOfLockChange. */
        class ProofOfLockChange implements IProofOfLockChange {

            /**
             * Constructs a new ProofOfLockChange.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.types.IProofOfLockChange);

            /** ProofOfLockChange votes. */
            public votes: tendermint.types.IVote[];

            /** ProofOfLockChange pub_key. */
            public pub_key?: (tendermint.crypto.IPublicKey|null);

            /**
             * Encodes the specified ProofOfLockChange message. Does not implicitly {@link tendermint.types.ProofOfLockChange.verify|verify} messages.
             * @param message ProofOfLockChange message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.types.IProofOfLockChange, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProofOfLockChange message, length delimited. Does not implicitly {@link tendermint.types.ProofOfLockChange.verify|verify} messages.
             * @param message ProofOfLockChange message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.types.IProofOfLockChange, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProofOfLockChange message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProofOfLockChange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.types.ProofOfLockChange;

            /**
             * Decodes a ProofOfLockChange message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProofOfLockChange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.types.ProofOfLockChange;

            /**
             * Verifies a ProofOfLockChange message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProofOfLockChange message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProofOfLockChange
             */
            public static fromObject(object: { [k: string]: any }): tendermint.types.ProofOfLockChange;

            /**
             * Creates a plain object from a ProofOfLockChange message. Also converts values to other types if specified.
             * @param message ProofOfLockChange
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.types.ProofOfLockChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProofOfLockChange to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace libs. */
    namespace libs {

        /** Namespace bits. */
        namespace bits {

            /** Properties of a BitArray. */
            interface IBitArray {

                /** BitArray bits */
                bits?: (Long|null);

                /** BitArray elems */
                elems?: (Long[]|null);
            }

            /** Represents a BitArray. */
            class BitArray implements IBitArray {

                /**
                 * Constructs a new BitArray.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.libs.bits.IBitArray);

                /** BitArray bits. */
                public bits: Long;

                /** BitArray elems. */
                public elems: Long[];

                /**
                 * Encodes the specified BitArray message. Does not implicitly {@link tendermint.libs.bits.BitArray.verify|verify} messages.
                 * @param message BitArray message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.libs.bits.IBitArray, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BitArray message, length delimited. Does not implicitly {@link tendermint.libs.bits.BitArray.verify|verify} messages.
                 * @param message BitArray message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.libs.bits.IBitArray, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BitArray message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BitArray
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.libs.bits.BitArray;

                /**
                 * Decodes a BitArray message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BitArray
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.libs.bits.BitArray;

                /**
                 * Verifies a BitArray message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BitArray message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BitArray
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.libs.bits.BitArray;

                /**
                 * Creates a plain object from a BitArray message. Also converts values to other types if specified.
                 * @param message BitArray
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.libs.bits.BitArray, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BitArray to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Namespace version. */
    namespace version {

        /** Properties of an App. */
        interface IApp {

            /** App protocol */
            protocol?: (Long|null);

            /** App software */
            software?: (string|null);
        }

        /** Represents an App. */
        class App implements IApp {

            /**
             * Constructs a new App.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.version.IApp);

            /** App protocol. */
            public protocol: Long;

            /** App software. */
            public software: string;

            /**
             * Encodes the specified App message. Does not implicitly {@link tendermint.version.App.verify|verify} messages.
             * @param message App message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.version.IApp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified App message, length delimited. Does not implicitly {@link tendermint.version.App.verify|verify} messages.
             * @param message App message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.version.IApp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an App message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns App
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.version.App;

            /**
             * Decodes an App message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns App
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.version.App;

            /**
             * Verifies an App message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an App message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns App
             */
            public static fromObject(object: { [k: string]: any }): tendermint.version.App;

            /**
             * Creates a plain object from an App message. Also converts values to other types if specified.
             * @param message App
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.version.App, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this App to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Consensus. */
        interface IConsensus {

            /** Consensus block */
            block?: (Long|null);

            /** Consensus app */
            app?: (Long|null);
        }

        /** Represents a Consensus. */
        class Consensus implements IConsensus {

            /**
             * Constructs a new Consensus.
             * @param [properties] Properties to set
             */
            constructor(properties?: tendermint.version.IConsensus);

            /** Consensus block. */
            public block: Long;

            /** Consensus app. */
            public app: Long;

            /**
             * Encodes the specified Consensus message. Does not implicitly {@link tendermint.version.Consensus.verify|verify} messages.
             * @param message Consensus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: tendermint.version.IConsensus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Consensus message, length delimited. Does not implicitly {@link tendermint.version.Consensus.verify|verify} messages.
             * @param message Consensus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: tendermint.version.IConsensus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Consensus message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Consensus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.version.Consensus;

            /**
             * Decodes a Consensus message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Consensus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.version.Consensus;

            /**
             * Verifies a Consensus message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Consensus message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Consensus
             */
            public static fromObject(object: { [k: string]: any }): tendermint.version.Consensus;

            /**
             * Creates a plain object from a Consensus message. Also converts values to other types if specified.
             * @param message Consensus
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: tendermint.version.Consensus, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Consensus to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto public_dependency */
            public_dependency?: (number[]|null);

            /** FileDescriptorProto weak_dependency */
            weak_dependency?: (number[]|null);

            /** FileDescriptorProto message_type */
            message_type?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enum_type */
            enum_type?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto source_code_info */
            source_code_info?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto public_dependency. */
            public public_dependency: number[];

            /** FileDescriptorProto weak_dependency. */
            public weak_dependency: number[];

            /** FileDescriptorProto message_type. */
            public message_type: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enum_type. */
            public enum_type: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto source_code_info. */
            public source_code_info?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nested_type */
            nested_type?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enum_type */
            enum_type?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extension_range */
            extension_range?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneof_decl */
            oneof_decl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reserved_range */
            reserved_range?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reserved_name */
            reserved_name?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nested_type. */
            public nested_type: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enum_type. */
            public enum_type: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extension_range. */
            public extension_range: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneof_decl. */
            public oneof_decl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reserved_range. */
            public reserved_range: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reserved_name. */
            public reserved_name: string[];

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto type_name */
            type_name?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto default_value */
            default_value?: (string|null);

            /** FieldDescriptorProto oneof_index */
            oneof_index?: (number|null);

            /** FieldDescriptorProto json_name */
            json_name?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto type_name. */
            public type_name: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto default_value. */
            public default_value: string;

            /** FieldDescriptorProto oneof_index. */
            public oneof_index: number;

            /** FieldDescriptorProto json_name. */
            public json_name: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto input_type */
            input_type?: (string|null);

            /** MethodDescriptorProto output_type */
            output_type?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto client_streaming */
            client_streaming?: (boolean|null);

            /** MethodDescriptorProto server_streaming */
            server_streaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto input_type. */
            public input_type: string;

            /** MethodDescriptorProto output_type. */
            public output_type: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto client_streaming. */
            public client_streaming: boolean;

            /** MethodDescriptorProto server_streaming. */
            public server_streaming: boolean;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions java_package */
            java_package?: (string|null);

            /** FileOptions java_outer_classname */
            java_outer_classname?: (string|null);

            /** FileOptions java_multiple_files */
            java_multiple_files?: (boolean|null);

            /** FileOptions java_generate_equals_and_hash */
            java_generate_equals_and_hash?: (boolean|null);

            /** FileOptions java_string_check_utf8 */
            java_string_check_utf8?: (boolean|null);

            /** FileOptions optimize_for */
            optimize_for?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions go_package */
            go_package?: (string|null);

            /** FileOptions cc_generic_services */
            cc_generic_services?: (boolean|null);

            /** FileOptions java_generic_services */
            java_generic_services?: (boolean|null);

            /** FileOptions py_generic_services */
            py_generic_services?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions cc_enable_arenas */
            cc_enable_arenas?: (boolean|null);

            /** FileOptions objc_class_prefix */
            objc_class_prefix?: (string|null);

            /** FileOptions csharp_namespace */
            csharp_namespace?: (string|null);

            /** FileOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .gogoproto.goproto_getters_all */
            ".gogoproto.goproto_getters_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_enum_prefix_all */
            ".gogoproto.goproto_enum_prefix_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_stringer_all */
            ".gogoproto.goproto_stringer_all"?: (boolean|null);

            /** FileOptions .gogoproto.verbose_equal_all */
            ".gogoproto.verbose_equal_all"?: (boolean|null);

            /** FileOptions .gogoproto.face_all */
            ".gogoproto.face_all"?: (boolean|null);

            /** FileOptions .gogoproto.gostring_all */
            ".gogoproto.gostring_all"?: (boolean|null);

            /** FileOptions .gogoproto.populate_all */
            ".gogoproto.populate_all"?: (boolean|null);

            /** FileOptions .gogoproto.stringer_all */
            ".gogoproto.stringer_all"?: (boolean|null);

            /** FileOptions .gogoproto.onlyone_all */
            ".gogoproto.onlyone_all"?: (boolean|null);

            /** FileOptions .gogoproto.equal_all */
            ".gogoproto.equal_all"?: (boolean|null);

            /** FileOptions .gogoproto.description_all */
            ".gogoproto.description_all"?: (boolean|null);

            /** FileOptions .gogoproto.testgen_all */
            ".gogoproto.testgen_all"?: (boolean|null);

            /** FileOptions .gogoproto.benchgen_all */
            ".gogoproto.benchgen_all"?: (boolean|null);

            /** FileOptions .gogoproto.marshaler_all */
            ".gogoproto.marshaler_all"?: (boolean|null);

            /** FileOptions .gogoproto.unmarshaler_all */
            ".gogoproto.unmarshaler_all"?: (boolean|null);

            /** FileOptions .gogoproto.stable_marshaler_all */
            ".gogoproto.stable_marshaler_all"?: (boolean|null);

            /** FileOptions .gogoproto.sizer_all */
            ".gogoproto.sizer_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_enum_stringer_all */
            ".gogoproto.goproto_enum_stringer_all"?: (boolean|null);

            /** FileOptions .gogoproto.enum_stringer_all */
            ".gogoproto.enum_stringer_all"?: (boolean|null);

            /** FileOptions .gogoproto.unsafe_marshaler_all */
            ".gogoproto.unsafe_marshaler_all"?: (boolean|null);

            /** FileOptions .gogoproto.unsafe_unmarshaler_all */
            ".gogoproto.unsafe_unmarshaler_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_extensions_map_all */
            ".gogoproto.goproto_extensions_map_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_unrecognized_all */
            ".gogoproto.goproto_unrecognized_all"?: (boolean|null);

            /** FileOptions .gogoproto.gogoproto_import */
            ".gogoproto.gogoproto_import"?: (boolean|null);

            /** FileOptions .gogoproto.protosizer_all */
            ".gogoproto.protosizer_all"?: (boolean|null);

            /** FileOptions .gogoproto.compare_all */
            ".gogoproto.compare_all"?: (boolean|null);

            /** FileOptions .gogoproto.typedecl_all */
            ".gogoproto.typedecl_all"?: (boolean|null);

            /** FileOptions .gogoproto.enumdecl_all */
            ".gogoproto.enumdecl_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_registration */
            ".gogoproto.goproto_registration"?: (boolean|null);

            /** FileOptions .gogoproto.messagename_all */
            ".gogoproto.messagename_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_sizecache_all */
            ".gogoproto.goproto_sizecache_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_unkeyed_all */
            ".gogoproto.goproto_unkeyed_all"?: (boolean|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions java_package. */
            public java_package: string;

            /** FileOptions java_outer_classname. */
            public java_outer_classname: string;

            /** FileOptions java_multiple_files. */
            public java_multiple_files: boolean;

            /** FileOptions java_generate_equals_and_hash. */
            public java_generate_equals_and_hash: boolean;

            /** FileOptions java_string_check_utf8. */
            public java_string_check_utf8: boolean;

            /** FileOptions optimize_for. */
            public optimize_for: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions go_package. */
            public go_package: string;

            /** FileOptions cc_generic_services. */
            public cc_generic_services: boolean;

            /** FileOptions java_generic_services. */
            public java_generic_services: boolean;

            /** FileOptions py_generic_services. */
            public py_generic_services: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions cc_enable_arenas. */
            public cc_enable_arenas: boolean;

            /** FileOptions objc_class_prefix. */
            public objc_class_prefix: string;

            /** FileOptions csharp_namespace. */
            public csharp_namespace: string;

            /** FileOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions message_set_wire_format */
            message_set_wire_format?: (boolean|null);

            /** MessageOptions no_standard_descriptor_accessor */
            no_standard_descriptor_accessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions map_entry */
            map_entry?: (boolean|null);

            /** MessageOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .cosmos_proto.interface_type */
            ".cosmos_proto.interface_type"?: (string|null);

            /** MessageOptions .cosmos_proto.implements_interface */
            ".cosmos_proto.implements_interface"?: (string|null);

            /** MessageOptions .gogoproto.goproto_getters */
            ".gogoproto.goproto_getters"?: (boolean|null);

            /** MessageOptions .gogoproto.goproto_stringer */
            ".gogoproto.goproto_stringer"?: (boolean|null);

            /** MessageOptions .gogoproto.verbose_equal */
            ".gogoproto.verbose_equal"?: (boolean|null);

            /** MessageOptions .gogoproto.face */
            ".gogoproto.face"?: (boolean|null);

            /** MessageOptions .gogoproto.gostring */
            ".gogoproto.gostring"?: (boolean|null);

            /** MessageOptions .gogoproto.populate */
            ".gogoproto.populate"?: (boolean|null);

            /** MessageOptions .gogoproto.stringer */
            ".gogoproto.stringer"?: (boolean|null);

            /** MessageOptions .gogoproto.onlyone */
            ".gogoproto.onlyone"?: (boolean|null);

            /** MessageOptions .gogoproto.equal */
            ".gogoproto.equal"?: (boolean|null);

            /** MessageOptions .gogoproto.description */
            ".gogoproto.description"?: (boolean|null);

            /** MessageOptions .gogoproto.testgen */
            ".gogoproto.testgen"?: (boolean|null);

            /** MessageOptions .gogoproto.benchgen */
            ".gogoproto.benchgen"?: (boolean|null);

            /** MessageOptions .gogoproto.marshaler */
            ".gogoproto.marshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.unmarshaler */
            ".gogoproto.unmarshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.stable_marshaler */
            ".gogoproto.stable_marshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.sizer */
            ".gogoproto.sizer"?: (boolean|null);

            /** MessageOptions .gogoproto.unsafe_marshaler */
            ".gogoproto.unsafe_marshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.unsafe_unmarshaler */
            ".gogoproto.unsafe_unmarshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.goproto_extensions_map */
            ".gogoproto.goproto_extensions_map"?: (boolean|null);

            /** MessageOptions .gogoproto.goproto_unrecognized */
            ".gogoproto.goproto_unrecognized"?: (boolean|null);

            /** MessageOptions .gogoproto.protosizer */
            ".gogoproto.protosizer"?: (boolean|null);

            /** MessageOptions .gogoproto.compare */
            ".gogoproto.compare"?: (boolean|null);

            /** MessageOptions .gogoproto.typedecl */
            ".gogoproto.typedecl"?: (boolean|null);

            /** MessageOptions .gogoproto.messagename */
            ".gogoproto.messagename"?: (boolean|null);

            /** MessageOptions .gogoproto.goproto_sizecache */
            ".gogoproto.goproto_sizecache"?: (boolean|null);

            /** MessageOptions .gogoproto.goproto_unkeyed */
            ".gogoproto.goproto_unkeyed"?: (boolean|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions message_set_wire_format. */
            public message_set_wire_format: boolean;

            /** MessageOptions no_standard_descriptor_accessor. */
            public no_standard_descriptor_accessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions map_entry. */
            public map_entry: boolean;

            /** MessageOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .cosmos_proto.accepts_interface */
            ".cosmos_proto.accepts_interface"?: (string|null);

            /** FieldOptions .gogoproto.nullable */
            ".gogoproto.nullable"?: (boolean|null);

            /** FieldOptions .gogoproto.embed */
            ".gogoproto.embed"?: (boolean|null);

            /** FieldOptions .gogoproto.customtype */
            ".gogoproto.customtype"?: (string|null);

            /** FieldOptions .gogoproto.customname */
            ".gogoproto.customname"?: (string|null);

            /** FieldOptions .gogoproto.jsontag */
            ".gogoproto.jsontag"?: (string|null);

            /** FieldOptions .gogoproto.moretags */
            ".gogoproto.moretags"?: (string|null);

            /** FieldOptions .gogoproto.casttype */
            ".gogoproto.casttype"?: (string|null);

            /** FieldOptions .gogoproto.castkey */
            ".gogoproto.castkey"?: (string|null);

            /** FieldOptions .gogoproto.castvalue */
            ".gogoproto.castvalue"?: (string|null);

            /** FieldOptions .gogoproto.stdtime */
            ".gogoproto.stdtime"?: (boolean|null);

            /** FieldOptions .gogoproto.stdduration */
            ".gogoproto.stdduration"?: (boolean|null);

            /** FieldOptions .gogoproto.wktpointer */
            ".gogoproto.wktpointer"?: (boolean|null);

            /** FieldOptions .gogoproto.castrepeated */
            ".gogoproto.castrepeated"?: (string|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allow_alias */
            allow_alias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** EnumOptions .gogoproto.goproto_enum_prefix */
            ".gogoproto.goproto_enum_prefix"?: (boolean|null);

            /** EnumOptions .gogoproto.goproto_enum_stringer */
            ".gogoproto.goproto_enum_stringer"?: (boolean|null);

            /** EnumOptions .gogoproto.enum_stringer */
            ".gogoproto.enum_stringer"?: (boolean|null);

            /** EnumOptions .gogoproto.enum_customname */
            ".gogoproto.enum_customname"?: (string|null);

            /** EnumOptions .gogoproto.enumdecl */
            ".gogoproto.enumdecl"?: (boolean|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allow_alias. */
            public allow_alias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** EnumValueOptions .gogoproto.enumvalue_customname */
            ".gogoproto.enumvalue_customname"?: (string|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifier_value */
            identifier_value?: (string|null);

            /** UninterpretedOption positive_int_value */
            positive_int_value?: (Long|null);

            /** UninterpretedOption negative_int_value */
            negative_int_value?: (Long|null);

            /** UninterpretedOption double_value */
            double_value?: (number|null);

            /** UninterpretedOption string_value */
            string_value?: (Uint8Array|null);

            /** UninterpretedOption aggregate_value */
            aggregate_value?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifier_value. */
            public identifier_value: string;

            /** UninterpretedOption positive_int_value. */
            public positive_int_value: Long;

            /** UninterpretedOption negative_int_value. */
            public negative_int_value: Long;

            /** UninterpretedOption double_value. */
            public double_value: number;

            /** UninterpretedOption string_value. */
            public string_value: Uint8Array;

            /** UninterpretedOption aggregate_value. */
            public aggregate_value: string;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart name_part */
                name_part: string;

                /** NamePart is_extension */
                is_extension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart name_part. */
                public name_part: string;

                /** NamePart is_extension. */
                public is_extension: boolean;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leading_comments */
                leading_comments?: (string|null);

                /** Location trailing_comments */
                trailing_comments?: (string|null);

                /** Location leading_detached_comments */
                leading_detached_comments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leading_comments. */
                public leading_comments: string;

                /** Location trailing_comments. */
                public trailing_comments: string;

                /** Location leading_detached_comments. */
                public leading_detached_comments: string[];

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation source_file */
                source_file?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation source_file. */
                public source_file: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: Long;

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (Long|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: Long;

            /** Duration nanos. */
            public nanos: number;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fully_decode_reserved_expansion */
            fully_decode_reserved_expansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fully_decode_reserved_expansion. */
            public fully_decode_reserved_expansion: boolean;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule response_body */
            response_body?: (string|null);

            /** HttpRule additional_bindings */
            additional_bindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get?: (string|null);

            /** HttpRule put. */
            public put?: (string|null);

            /** HttpRule post. */
            public post?: (string|null);

            /** HttpRule delete. */
            public delete?: (string|null);

            /** HttpRule patch. */
            public patch?: (string|null);

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule response_body. */
            public response_body: string;

            /** HttpRule additional_bindings. */
            public additional_bindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
