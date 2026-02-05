#!/bin/bash

# Create various icon sizes for PWA
# Using ImageMagick or sips (macOS)

INPUT="/Volumes/Data/currencito/public/icon-512.png"
OUTPUT_DIR="/Volumes/Data/currencito/public"

# Create different sizes
sips -z 192 192 "$INPUT" --out "$OUTPUT_DIR/icon-192.png"
sips -z 384 384 "$INPUT" --out "$OUTPUT_DIR/icon-384.png"
sips -z 72 72 "$INPUT" --out "$OUTPUT_DIR/icon-72.png"
sips -z 96 96 "$INPUT" --out "$OUTPUT_DIR/icon-96.png"
sips -z 128 128 "$INPUT" --out "$OUTPUT_DIR/icon-128.png"
sips -z 144 144 "$INPUT" --out "$OUTPUT_DIR/icon-144.png"
sips -z 152 152 "$INPUT" --out "$OUTPUT_DIR/icon-152.png"
sips -z 256 256 "$INPUT" --out "$OUTPUT_DIR/icon-256.png"

# Create favicon
sips -z 32 32 "$INPUT" --out "$OUTPUT_DIR/favicon-32x32.png"
sips -z 16 16 "$INPUT" --out "$OUTPUT_DIR/favicon-16x16.png"

# Create apple touch icon
sips -z 180 180 "$INPUT" --out "$OUTPUT_DIR/apple-touch-icon.png"

echo "Icon generation complete!"
