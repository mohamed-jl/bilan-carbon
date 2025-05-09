export default function partitions(x: number, y: number, z: number) {
    const sum = x + y + z;
    return [x / sum, y / sum, z / sum];

}